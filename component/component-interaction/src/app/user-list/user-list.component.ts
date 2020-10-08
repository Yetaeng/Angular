import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <!-- 추가(p.268) -->
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users; let i = index">
          <td>{{ i }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
          <!-- 추가(p.268) -->
          <td>
            <!--   EventEmitter객체는 커스텀 이벤트를 발생시키는 emit 메소드를 가지고 있다.
                  이는 사용자 삭제 버튼이 클릭되면 emit 메소드를 통해 커스텀 이벤트를 발생시키고,
                  emit 메소드에 인자를 전달하여 부모 컴포넌트에게 상태 정보를 전달함 -->
            <button class="btn btn-danger btn-sm" (click)="remove.emit(user)">
              <span class="glyphicon glyphicon-remove"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 추가(p.265) -->
    <div class="panel panel-default">
      <div class="panel-body">
        <p>Admin: {{ cntAdmin }}</p>
        <p>Developer: {{ cntDeveloper }}</p>
        <p>Designer: {{ cntDesigner }}</p>
      </div>
    </div>
  `,
})
export class UserListComponent {
  // 부모 컴포넌트가 전달한 상태 정보(users)를 입력 프로퍼티에 바인딩한다.
  // 자식 컴포넌트의 @Input 데코레이터 바로 뒤에 있는 users 프로퍼티에 바인딩됨
  // @Input() user: User[];

  // _users는 내부에서만 사용할 private 프로퍼티이다.
  private _users: User[];

  // 역할별 사용자 카운터
  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  // 부모 컴포넌트가 전달한 정보에서 필요한 정보를 추출하여 컴포넌트 프로퍼티에 바인딩한다.
  @Input()
  set users(users: User[]) {
    if (!users) {
      return;
    }

    this.cntAdmin = users.filter(({ role }) => role === 'Administrator').length;
    this.cntDeveloper = users.filter(({ role }) => role === 'Developer').length;
    this.cntDesigner = users.filter(({ role }) => role === 'Designer').length;
    this._users = users;
  }

  get users(): User[] {
    return this._users;
  }

  // 부모 컴포넌트에게 상태 정보를 전달하기 위해 출력 프로퍼티를 EventEmitter 객체로 초기화한다.
  // 이는 User 타입의 EventEmitter 객체를 생성
  @Output() remove = new EventEmitter<User>();
}
