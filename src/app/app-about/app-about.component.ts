import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})
export class AppAboutComponent implements OnInit {
  public title: string = 'About Us';
  public pageTitleDescription: string = "Why you love to learn AngularJS with us";
  public pageDescription: string = "Hi there! thanks for dropping by <br> <br> I have a passion for creating value in the form of functional, reliable software and websites. My current focus is AngularJS. Earlier in my career, I worked with Flash, Flex, ActionScript 2.0\/3.0 and other Adobe technologies.<br> <br>";

  constructor() {
  }

  ngOnInit() {
  }

}
