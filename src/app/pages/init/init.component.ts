import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LogoutService } from '../../services/security/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  constructor(private title: Title,
              private router: Router,
              private logoutService: LogoutService) { }

  ngOnInit() {
    this.title.setTitle('Init');
  }

  async logout() {
    await this.logoutService.logout();
  }
}
