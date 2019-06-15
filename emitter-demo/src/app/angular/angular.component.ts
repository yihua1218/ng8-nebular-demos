import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.sass']
})
export class AngularComponent implements OnInit {
  title = 'emitter-demo';
  
  constructor() { }

  ngOnInit() {
  }

}
