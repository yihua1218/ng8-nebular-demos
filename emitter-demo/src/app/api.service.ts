import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitter } from './emitter-client/emitter';

import * as Url from 'url-parse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://api.nuclias.tw/v1';
  public emitter: any;
  server = 'emitter.nuclias.tw';
  url = '';
  channel = 'web/';
  key = 'tbO95-Hup9l5u1OyC4T4-obhOI2rObL3';
  name = 'Guest';
  message = '';
  messages = [];
  connected = false;
  keys: any;

  constructor(private httpClient: HttpClient) {
    this.emitter = new Emitter();
    this.getEmitterKeys()
      .subscribe((data: any) => {
        this.keys = data.channels;
        if (this.keys.length > 0) {
          this.channel = this.keys[0].channel;
          this.key = this.keys[0].key;
          this.onConnect();
        }
      });
  }

  onConnected() {
    console.log('onConnected:');
    this.connected = true;
    this.emitter
    .on('connect', (connack) => {
        console.log('connack:', connack);
        this.connected = true;
      })
    .on('disconnect', () => {
        console.log('on disconnect:');
        this.connected = false;
      })
    .on('message', (msg) => {
        const message = msg.asObject();
        console.log(message);
        if (message.user) {
          message.reply = false;
          if (message.user.name !== this.name) {
            this.messages.push(message);
          }
          if (message.text === '/presence') {
            this.emitter.presence({
              key: this.key,
              channel: this.channel,
            });
          }
        } else {
          console.log(message);
        }
      })
    .on('offline', () => {
        console.log('on offline:');
        this.connected = false;
      })
    .on('keygen', (keygen: any) => {
        console.log(keygen);
      })
    .on('presence', (msg: any) => {
        console.log('presence:', msg);
      })
    .on('me', (msg: any) => {
        console.log('me:', msg);
      })
    .me()
    .subscribe({
        key: this.key,
        channel: this.channel,
      })
    .presence({
        key: this.key,
        channel: this.channel,
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

    if (parts.port !== '') {
      port = parts.port;
    }

    const connectRequest = {
      secure: isSecure,
      host: parts.host,
      port,
    };
    this.emitter.connect(connectRequest, (event) => {
      console.log(event);
      this.onConnected();
    });
  }

  onDisconnect() {
    this.emitter.disconnect();
  }

  public getEmitterKeys() {
    return this.httpClient.get(`${this.apiURL}/emitter`);
  }
}
