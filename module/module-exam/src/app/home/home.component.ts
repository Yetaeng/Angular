// home 페이지를 위한 컴포넌트로서 사용자의 정보를 표시하며 header.component.ts를 사용
import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title"></app-header>
    <ul>
      <li>id : {{ user.id }}</li>
      <li>name : {{ user.name }}</li>
      <li>admin : {{ user.admin }}</li>
    </ul>
  `,
})
export class HomeComponent implements OnInit {
  title = 'User Information';
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
