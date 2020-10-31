import { Component, OnInit, OnDestroy } from '@angular/core';

// RxJS 임포트
import { Observable, Subscription, from } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<p>{{ values }}</p>',
})
export class ObservableComponent implements OnInit, OnDestroy {
  myArray = [1, 2, 3, 4, 5];
  subscription: Subscription;
  values: number[] = [];

  ngOnInit() {
    // 옵저버블 생성 -> from 오퍼레이터가 배열과 같은 이터러블을 인자로 전달받음으로써
    const observable$ = from(this.myArray);

    this.subscription = observable$
      .pipe(
        // 오퍼레이터에 의한 옵저버블 변형 -> 여기서는 체이닝함
        map((item) => item * 2), // 2, 4, 6, 8, 10
        filter((item) => item > 5), // 6, 8, 10
        tap((item) => console.log(item)) // 6, 8, 10
      )
      // 옵저버블 구독 -> 옵저버블은 방출한 데이터와 에러, 스트리밍의 종료 여부를 옵저버에게 전달함
      .subscribe(
        // next
        (value) => this.values.push(value),
        // error
        (error) => console.log(error),
        // complete
        () => console.log('Streaming finished')
      );
  }

  ngOnDestroy() {
    // 옵저버블 구독 해지 -> 구독함으로써 반환된 subscription 객체를 취소할 때 사용함
    this.subscription.unsubscribe();
  }
}
