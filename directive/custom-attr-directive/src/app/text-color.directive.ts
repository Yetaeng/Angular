import { ThrowStmt } from '@angular/compiler';
import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
} from '@angular/core';
import { tick } from '@angular/core/testing';

@Directive({
  selector: '[appTextColor]',
})
export class TextColorDirective {
  // 호소트 요소에서 프로퍼티 바인딩한 값을 전달받음
  @Input('textColor') color: string; // 1. 바인딩한 컬러가
  // 일반 어트리뷰트의 정적 값의 전달
  @Input() defaultColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // 기본 컬러를 초기 표시에 적용
  ngOnInit() {
    this.textColor(this.defaultColor);
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color); // 3. 호스트 요소의 텍스트 컬러가 이벤트에 의해 변경됨
  }

  @HostListener('mouseleave') handleMouseLeave() {
    // this.textColor(null);
    this.textColor(this.defaultColor);
  }

  private textColor(color: string) {
    // 2. 디렉티브로 전달되고
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
