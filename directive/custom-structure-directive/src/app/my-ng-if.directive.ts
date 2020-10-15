import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myNgIf]',
})
export class MyNgIfDirective {
  constructor(
    private templateRef: TemplateRef<any>, //templateRef는 ng-template 디렉티브로 래핑된 요소를 가리키는 객체를 생성함
    private viewContainer: ViewContainerRef // viewContainer는 하나 이상의 뷰(호스트 뷰 or 임베디드 뷰)를 포함시킬 수 있는 컨테이너
  ) {}

  @Input() set myNgIf(condition: boolean) {
    if (condition) {
      // 호스트 뷰에 ng-template 디렉티브를 추가
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // 호스트 뷰에 ng-template 디렉티브를 제거
      this.viewContainer.clear();
    }
  }
}
