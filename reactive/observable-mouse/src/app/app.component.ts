import { Component, OnInit } from '@angular/core';

// RxJS 임포트
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h3>Mouse Coordinates</h3>
    <h3>X: {{ posX }} Y: {{ posY }}</h3>
  `,
})
export class AppComponent implements OnInit {
  mousePosition$: Observable<Event>;
  posX: number = 0;
  posY: number = 0;

  ngOnInit() {
    // 옵저버블의 생성(fromEvent 오퍼레이터가 Dom 이벤트를 옵저버블로 변환) -> 이때 옵저버블은 아무런 동작을 하지 않는다.
    this.mousePosition$ = fromEvent(document, 'mousemove');

    // 옵저버는 옵저버블을 구독하고(subscribe 오퍼레이터 사용) 옵저버블이 방출한 데이터를 전파받아 사용한다.
    this.mousePosition$.subscribe(
      (event: MouseEvent) => {
        this.posX = event.clientX;
        this.posY = event.clientY;
      },
      (error) => console.log(error),
      () => console.log('complete!')
    );
  }
}
