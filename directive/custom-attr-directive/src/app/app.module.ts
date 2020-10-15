import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBlueDirective } from './text-blue.directive';
import { TextColorDirective } from './text-color.directive';

@NgModule({
  // 디렉티브를 모듈에 등록하면 컴포넌트에서 사용할 수 있다.
  declarations: [AppComponent, TextBlueDirective, TextColorDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
