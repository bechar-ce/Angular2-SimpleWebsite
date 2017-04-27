import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})
export class AppAboutComponent implements OnInit {
  public title: string = 'About Us';
  public pageTitleDescription: string = "Why you love to learn AngularJS with us";
  constructor() {
  }

  ngOnInit() {
  }

}
