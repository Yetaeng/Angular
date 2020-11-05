import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<user-form></user-form>', // templateUrl로 되어있어서 에러났었음!
})
export class AppComponent {
  title = 'template-driven-form-exam';
}
