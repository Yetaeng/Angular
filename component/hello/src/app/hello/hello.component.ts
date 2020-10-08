import { Component } from '@angular/core';
// import { Http2ServerRequest } from 'http2';

@Component({
  selector: 'app-hello',
  // #inputYourName은 템플릿 참조 변수로 템플릿 내의 DOM 요소에 대한 참조로서 템플릿 내에서 변수처럼 사용함.
  // (click)은 이벤트 바인딩이라 하며, 이벤트 발생 시 컴포넌트 클래스에 정의된 이벤트 핸들러 setName을 호출한다.
  // 그리고 그때 input 요소의 value가 컴포넌트 클래스의 name 프로퍼티에 저장된다.
  // 저장된 value는 템플릿 문법인 인터폴레이션에 의해 h2 요소에 삽입된다.
  template: `
    <h2>안녕하세요 {{ name }}</h2>
    <input type="text" placehorder="이름을 입력하세요" #inputYourName />
    <button (click)="setName(inputYourName.value)">등록</button>
  `,
  styles: [
    `
      h2 {
        color: #673ab7;
      }
      input[type='text'] {
        width: 200px;
        height: 25px;
        padding-left: 10px;
        margin-top: 10px;
        border: solid 1px #ccc;
        border-radius: 4px;
        outline: none;
        box-sizing: border-box;
      }
      button {
        height: 25px;
        width: 40px;
        background-color: #fff;
        border: solid 1px #ccc;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        box-sizing: border-box;
        vertical-align: middle;
      }
      button:hover {
        background-color: #e6e6e6;
        border-color: #adadad;
      }
    `,
  ],
})

// 클래스는 하나의 클래스 프로퍼티와 하나의 메소드를 가짐
export class HelloComponent {
  name: string; // 프로퍼티

  setName(name: string) {
    this.name = name; // 메소드
  }
}
