import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  page = 'login';

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Login Page');
  }

  userRegistered() {
    this.page = 'login';
  }

}
