import { Component } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  template: `
    <input #todo type="text" />
    <button (click)="add(todo.value)">add</button>
    <ul>
      <li
        *ngFor="let todo of todos | limit: 5"
        (click)="complete(todo.id)"
        [class.completed]="todo.completed"
      >
        {{ todo.content }}
      </li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
  styles: [
    `
      .completed {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodosComponent {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: false },
  ];

  add(content: string) {
    // push 메소드는 원본 배열을 직접 변경하지만 원본 배열의 참조는 변경되지 않기 때문에 파이프에 의해 변화 감지되지 않는다!!
    // this.todos.push({
    //   id: this.getNextId(),
    //   content,
    //   completed: false,
    // });

    // 파이프에 의해 변화 감지가 작동하기 위해서는 todos 프로퍼티의 참조가 변경되도록 수정.
    this.todos = [
      ...this.todos,
      { id: this.getNextId(), content, completed: false },
    ];
  }

  complete(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  private getNextId(): number {
    return !this.todos.length
      ? 1
      : Math.max(...this.todos.map(({ id }) => id)) + 1;
  }
}
