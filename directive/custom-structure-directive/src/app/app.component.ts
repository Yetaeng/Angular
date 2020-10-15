import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2 *myNgIf="condition">Hello {{ name }}</h2>
    <button (click)="condition = !condition">Click</button>
  `,
})
export class AppComponent {
  condition = false;
  name = 'Lee';
}
