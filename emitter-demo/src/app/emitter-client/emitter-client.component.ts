import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emitter-client',
  templateUrl: './emitter-client.component.html',
  styleUrls: ['./emitter-client.component.sass']
})
export class EmitterClientComponent implements OnInit {
  emitter: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.emitter = this.apiService.emitter;
  }

  onKeyUp(event: any) {
    if (event.target.id === 'server') {
      this.apiService.server = event.target.value;
    }
    if (event.target.id === 'channel') {
      this.apiService.channel = event.target.value;
    }
    if (event.target.id === 'key') {
      this.apiService.key = event.target.value;
    }
    if (event.target.id === 'message') {
      this.apiService.message = event.target.value;
    }
    if (event.target.id === 'name') {
      this.apiService.name = event.target.value;
    }
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
      files,
      user: {
        name: this.apiService.name,
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    };

    this.apiService.messages.push(message);

    this.emitter.publish({
      key: this.apiService.key,
      channel: this.apiService.channel,
      message: JSON.stringify(message),
    });
    // const botReply = this.chatShowcaseService.reply(event.message);
    // if (botReply) {
    //   setTimeout(() => { this.messages.push(botReply) }, 500);
    // }
  }

  onClean() {
    this.apiService.messages.length = 0;
  }
}
