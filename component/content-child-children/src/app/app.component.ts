import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <user-list>
      <user #first>Lee</user>
      <user>Beak</user>
      <user>Kim</user>
    </user-list>
  `,
})
export class AppComponent {}
