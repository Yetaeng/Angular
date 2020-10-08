import { Component } from '@angular/core';

@Component({
  selector: 'single-content-projection',
  template: `
    <h3>Single-slot content projection</h3>
    <div>
      <!-- 부모 컴포넌트ㅏ 지정한 콘텐츠와 치환됨 -->
      <ng-content></ng-content>
      <div></div>
    </div>
  `,
})
export class SingleContentProjectionComponent {}
