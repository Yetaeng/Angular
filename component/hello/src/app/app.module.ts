import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component'; // hello 컴포넌트의 컴포넌트 클래스를 임포트한다.

@NgModule({
  declarations: [AppComponent, HelloComponent], // declarations 프로퍼티에 컴포넌트 클래스를 선언한다.
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
