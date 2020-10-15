import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse', // @Pipe 메타데이터 객체의 name 프로퍼티에 파이프의 식별자를 지정한다
})
export class ReversePipe implements PipeTransform {
  // 파이프 클래스는 PipeTransform 인터페이스의 추상 메소드 transform을 구현해야함
  transform(value: ''): string {
    return value.split('').reverse().join('');
  }
}
