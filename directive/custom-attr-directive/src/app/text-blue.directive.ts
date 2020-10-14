/*
사용자 정의 어트리뷰트 디렉티브의 생성
import { Directive, ElementRef, Renderer2 } from '@angular/core';

// 디렉티브의 식별자(appTextBlue)를 @Directive 메타데이터 객체의 selector 프로퍼티에 지정
@Directive({
  selector: '[appTextBlue]',
})
export class TextBlueDirective {
  // 생성자 함수에 주입된 ElementRef는 컴포넌트의 호스트 요소를 반환한다.
  // 의존성 주입을 통해 Renderer2의 인스턴스를 주입받음
  constructor(el: ElementRef, renderer: Renderer2) {
    // 호스트 요소의 컬러를 변경한다. (파란색으로)
    // el.nativeElement.style.color = 'blue';
    // Renderer2의 setStyle 메소드를 사용하여 호스트 요소의 스타일을 변경
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }
}
*/

// 이벤트 처리
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextBlue]',
})
export class TextBlueDirective {
  // 접근제한자 private를 추가하여 클래스 내부에서 참조 가능한 클래스 프로퍼티로 변경
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // @HostListener를 사용하면 호스트 요소의 이벤트를 수신할 수 있음
  // 호스트 요소에서 발생한 mouseenter 이벤트의 핸들러를 정의
  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor('blue');
  }

  // 호스트 요소에서 발생한 mouseleave 이벤트의 핸들러를 정의
  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
