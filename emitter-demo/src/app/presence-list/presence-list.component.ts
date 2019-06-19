import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presence-list',
  templateUrl: './presence-list.component.html',
  styleUrls: ['./presence-list.component.sass']
})
export class PresenceListComponent implements OnInit {
  items = [
    {
      title: 'Chat room',
      icon: 'message-square-outline',
      link: '/',
    },
    {
      title: 'Peoples',
      icon: 'people-outline',
      expanded: true,
      link: [],
      children: [],
    },
    {
      title: 'Settings',
      icon: 'lock-outline',
      link: '/settings',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
