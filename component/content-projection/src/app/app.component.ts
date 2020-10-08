import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- 싱글 슬롯 콘텐트 프로젝션 -->
    <single-content-projection>
      <strong>Single-slot</strong> <i>content projection</i>
    </single-content-projection>

    <!-- 멀티 슬롯 콘텐트 프로젝션 -->
    <multi-content-projection>
      <footer>Footer Content</footer>
      <header>Header Content</header>
      <section>Section Content</section>
      <div class="my-class">div with .my-class</div>
      <multi-content-projection> </multi-content-projection
    ></multi-content-projection>
  `,
})
export class AppComponent {}
