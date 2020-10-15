import { Component } from "@angular/core";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-root",
  template: `
    <h3>DatePipe</h3>
    <p>{{ today | date: "y년 MM월 dd일 HH시 mm분 ss초" }}</p>

    <h3>CurrencyPipe</h3>
    <!-- 한국원:통화기호표시:소숫점위 최소 1자리 소숫점아래 1~2 -->
    <p>{{ price | currency: "KRW":"symbol":"1.1-2" }}</p>

    <h3>SlicePipe : array</h3>
    <ul>
      <li *ngFor="let i of collection | slice: 1:3">{{ i }}</li>
    </ul>

    <h3>SlicePipe : string</h3>
    <p>{{ str | slice: 0:4 }}</p>

    <h3>JsonPipe</h3>
    <pre>{{ object | json }}</pre>

    <h3>DecimalPipe</h3>
    <p>{{ pi | number: "3.5" }}</p>

    <h3>PercentPipe</h3>
    <p>{{ num | percent: "3.3" }}</p>

    <h3>UpperCasePipe</h3>
    <p>{{ str | uppercase }}</p>

    <h3>LowerCasePipe</h3>
    <p>{{ str | lowercase }}</p>

    <h3>AsyncPipe</h3>
    <p>{{ second | async }}</p>
  `,
})
export class AppComponent {
  today = new Date();
  price = 0.1234;
  collection = ["a", "b", "c", "d"];
  str = "abcdefghij";
  object = { foo: "bar", baz: "qux", nested: { xyz: 3 } };
  pi = 3.141592;
  num = 1.3495;
  // 1s마다 값을 방출하고 10개를 take한다. (0 ~ 9)
  second = interval(1000).pipe(take(10));
}
