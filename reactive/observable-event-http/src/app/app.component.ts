import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// RxJS 임포트
import { Subscription, Observable, of, throwError } from 'rxjs';
import { debounceTime, switchMap, map, tap, catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

interface GithubUser {
  login: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Observable Events</h2>
    <input
      type="text"
      placeholder="Enter github userid"
      [formControl]="searchInput"
    />
    <pre>{{ githubUser | json }}</pre>
  `,
})
export class ObservableEventHttpComponent implements OnInit, OnDestroy {
  // ① Angular forms
  searchInput: FormControl = new FormControl('');
  githubUser: GithubUser;
  subscription: Subscription;

  // ② 서버와의 통신을 위해 HttpClient를 의존성 주입한다.
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // ① 폼 컨트롤 값의 상태를 옵저버블 스트림으로 수신한다.
    this.subscription = this.searchInput.valueChanges
      .pipe(
        // ③ 옵저버블이 방출하는 데이터를 수신하는 시간을 지연시킨다.
        debounceTime(500),
        // ④ 새로운 옵저버블을 생성한다. -> 메소드 실행이 완료되지 않으면, 새로운 이벤트가 발생하는데, 이때 기존 메소드는 취소되고 새로운 메소드가 실행된다.
        // 메소드 실행이 취소되면 HTTP 요청도 취소됨
        switchMap((userId: string) => this.getGithubUser(userId))
      )
      // ⑥ 옵저버블을 구독한다. -> 옵저버는 getGithubuser 메소드가 서버로부터 응답받은 user를 githubUser 프로퍼티에 할당한다.
      .subscribe(
        (user) => (this.githubUser = user),
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // ⑤ 서버로부터 데이터를 응답받아 옵저버블을 반환한다.
  getGithubUser(userId: string): Observable<GithubUser> {
    return this.http
      .get<GithubUser>(`https://api.github.com/users/${userId}`)
      .pipe(
        map((user) => ({ login: user.login, name: user.name })),
        tap(console.log),
        // ⑦ Error handling -> 옵저버블 시퀀스에서 발생한 에러를 캐치함
        catchError((err) => {
          if (err.status === 404) {
            return of(`[ERROR] Not found user: ${userId}`);
          } else {
            return throwError(err);
          }
        })
      );
  }
}
