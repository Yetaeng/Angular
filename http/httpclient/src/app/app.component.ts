import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
})
export class AppComponent implements OnInit {
  todos: Todo[];
  // url = 'http://localhost:3000/todos';
  /* NOTE:
    stackblitz.com에서는 json-server를 실행할 수 없기 때문에 
    now를 사용하여 json-server를 호스팅하였다. */
  url = 'https://mock-server-lebuyxyalo.now.sh/todos';

  // HttpClient를 컴포넌트에 주입
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // HTTP GET 요청
    this.http
      .get(this.url)
      /* 요청 결과를 프로퍼티에 할당한다.
         get 메소드는 Observable<Object>를 반환한다.
         이때 타입이 일치하지 않기 때문에 컴파일 에러가 발생한다. */
      .subscribe((todos) => (this.todos = todos));
    /* NOTE: 
        stackblitz.com에서는 에러가 발생하지 않지만 
        Angular CLI를 통해 생성한 프로젝트에서는 에러가 발생한다. */
  }
//  위 에러를 해결하기 위해서는 아래와 같이 해야한다.
  // ngOnInit() {
    // HTTP GET 요청: 타입 파라미터를 명기한다.
    // this.http.get<Todo[]>(this.url)
      /* 요청 결과를 프로퍼티에 할당한다.
         get 메소드는 Observable<Todo[]>을 반환한다. */
      // .subscribe(todos => this.todos = todos);

  }


}
