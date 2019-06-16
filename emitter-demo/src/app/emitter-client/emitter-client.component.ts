import { Component, OnInit } from '@angular/core';
import { Emitter } from './emitter';
import { ApiService } from '../api.service';

import * as Url from 'url-parse';

@Component({
  selector: 'app-emitter-client',
  templateUrl: './emitter-client.component.html',
  styleUrls: ['./emitter-client.component.sass']
})
export class EmitterClientComponent implements OnInit {
  server = 'emitter.nuclias.tw';
  url = '';
  channel = 'web/';
  key = 'tbO95-Hup9l5u1OyC4T4-obhOI2rObL3';
  name = 'Guest';
  message = '';
  messages = [];
  emitter: any;
  connected = false;
  keys: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.emitter = new Emitter();
    this.apiService.getEmitterKeys()
      .subscribe((data: any) => {
        this.keys = data.channels;
        console.log('keys:', this.keys);
        if (this.keys.length > 0) {
          this.channel = this.keys[0].channel;
          this.key = this.keys[0].key;
          this.onConnect();
        }
      });
    
  }

  onKeyUp(event: any) {
    if (event.target.id === 'server') {
      this.server = event.target.value;
    }
    if (event.target.id === 'channel') {
      this.channel = event.target.value;
    }
    if (event.target.id === 'key') {
      this.key = event.target.value;
    }
    if (event.target.id === 'message') {
      this.message = event.target.value;
    }
    if (event.target.id === 'name') {
      this.name = event.target.value;
    }
  }

  onConnected() {
    console.log('onConnected:');
    this.connected = true;
    this.emitter.me().subscribe({
      key: this.key,
      channel: this.channel,
    }).presence({
      key: this.key,
      channel: this.channel,
    }).on('connect', (connack) => {
      console.log('connack:', connack);
      this.connected = true;
    }).on('disconnect', () => {
      console.log('on disconnect:');
      this.connected = false;
    }).on('offline', () => {
      console.log('on offline:');
      this.connected = false;
    }).on('message', (msg) => {
      const message = msg.asObject();
      message.reply = false;
      if (message.user.name !== this.name) {
        this.messages.push(message);  
      }
    });
  }

  onConnect() {
    this.url = `ws://${this.server}`;
    const parts = Url(this.url);
    let isSecure = false;
    let port = 80;

    if (parts.protocol === 'wss:') {
      isSecure = true;
      port = 443;
    }

    if (parts.port !== "") {
      port = parts.port;
    }

    const connectRequest = {
      secure: isSecure,
      host: parts.host,
      port: port,
    };
    this.emitter.connect(connectRequest, (event) =>{
      console.log(event);
      this.onConnected();
    });
  }

  onDisconnect() {
    this.emitter.disconnect();
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    const message = {
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: this.name,
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    };

    this.messages.push(message);

    this.emitter.publish({
      key: this.key,
      channel: this.channel,
      message: JSON.stringify(message),
    });
    // const botReply = this.chatShowcaseService.reply(event.message);
    // if (botReply) {
    //   setTimeout(() => { this.messages.push(botReply) }, 500);
    // }
  }

  onClean() {
    this.messages.length = 0;
  }
}
