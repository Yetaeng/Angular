import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HomeModule 임포트
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './shared/header.component'; 공유 모듈에 등록되었으므로 제거
// import { HomeComponent } from './home/home.component'; HomeModule에 등록되어있는거니까 더 이상 루트 모듈의 관리 대상이 아님 -> 삭제(declarations에 있는 것도 제외시킴)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule /* 임포트 */],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
