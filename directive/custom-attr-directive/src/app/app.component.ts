import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // textBlue 디렉티브를 p 요소에 어트리뷰트로 적용하면, 이제 p 요소는 어트리뷰트 호스트 요소가 된다.
  // template: '<p textColor [color]="color">Text Color</p>', 프로퍼티 바인딩 방법
  //template: '<p [textColor]="color">Text Color</p>', // 디렉티브에 직접 바인딩
  template:
    '<button myDirective [inputValue]="msg" staticValue="hi!">Click me</button>',
})
export class AppComponent {
  color = 'button click'; // 동적으로 값 전달
}
