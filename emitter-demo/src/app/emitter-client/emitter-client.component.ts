import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter-client',
  templateUrl: './emitter-client.component.html',
  styleUrls: ['./emitter-client.component.sass']
})
export class EmitterClientComponent implements OnInit {
  server = 'emitter.nuclias.tw';
  channel = 'emitter-demo/';
  key = 'TOFNjOUXjOgkJk-nRTaXU5-YJ48fXbTt';
  name = 'Guest';
  message = '';
  messages = [];

  constructor() { }

  ngOnInit() {
    
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

  onConnect() {
    console.log('server:', this.server);
    console.log('channel:', this.channel);
    console.log('key:', this.key);
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: this.name,
        avatar: 'https://i.gifer.com/no.gif',
      },
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
