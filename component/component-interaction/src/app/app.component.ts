import { Component } from '@angular/core';
import { User } from './models/user.model'; // 추가한 User 모델 클래스를 컴포넌트에서 사용하기 위해 임포트함

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="form-inline">
          <div class="form-group" style="margin: 30px 0">
            <label for="name">Name:</label>
            <input
              #name
              type="text"
              id="name"
              class="form-control"
              placeholder="이름을 입력하세요"
            />
            <label for="role">Role:</label>
            <select #role id="role" class="form-control">
              <option>Administrator</option>
              <option>Developer</option>
              <option>Designer</option>
            </select>
            <button
              type="button"
              class="btn btn-default"
              (click)="addUser(name.value, role.value)"
            >
              Add user
            </button>
          </div>
          <!-- 부모 컴포넌트 클래스 프로퍼티 --> <!-- 변경(p.271)
          <app-users-list [users]="users" (remove)="removeUser($event)"></app-users-list>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  // 자식 컴포넌트와 공유할 상태 정보
  users: User[];

  constructor() {
    this.users = [
      new User(1, 'Lee', 'Administrator'),
      new User(2, 'Baek', 'Developer'),
      new User(3, 'Park', 'Designer'),
    ];
  }

  // 사용자 추가
  addUser(name: string, role: string): void {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
    }
  }

  // 해당 사용자 제거
  removeUser(user: User) {
    this.users = this.users.filter(({ id }) => id !== user.id);
  }

  // 새로운 사용자의 id를 취득
  getNextId(): number {
    return this.users.length
      ? Math.max(...this.users.map(({ id }) => id)) + 1
      : 1;
  }
}
