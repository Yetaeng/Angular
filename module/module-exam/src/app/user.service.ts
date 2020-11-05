// user.service.ts는 사용자 정보를 제공하는 서비스로서 애플리케이션 전역에서 공통으로 사용
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): User {
    // 임의의 사용자를 반환한다. 실제 환경에서는 서버의 데이터를 취득하여 반환.
    return { id: 1, name: 'Lee', admin: true };
  }
}
