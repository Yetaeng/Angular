// 애플리케이션의 헤더에 타이틀과 사용자 이름을 나타내기 위한 컴포넌트로서 모든 뷰에 공통으로 사용한다.
import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <div class="title">{{ title }}</div>
      <a class="user" href="#">{{ user.name }}</a>
    </nav>
  `,
  styles: [
    `
      nav {
        background-color: #4a4c88;
        overflow: hidden;
      }
      .title,
      .user {
        line-height: 50px;
        margin: 0 30px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .title {
        float: left;
      }
      .user {
        float: right;
        font-style: italic;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
