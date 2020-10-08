// 모델 클래스는 일관성을 유지하기 위한 인터페이스의 역할을 수행함
export class User {
  constructor(public id: number, public name: string, public role: string) {}
}
