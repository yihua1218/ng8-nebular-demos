import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presence-list',
  templateUrl: './presence-list.component.html',
  styleUrls: ['./presence-list.component.sass']
})
export class PresenceListComponent implements OnInit {
  items = [
    {
      title: 'Peoples',
      icon: 'people-outline',
      link: [],
    },
    {
      title: 'Settings',
      icon: 'lock-outline',
      link: [],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
