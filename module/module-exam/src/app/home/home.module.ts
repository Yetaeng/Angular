import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // HomeModule은 루트 모듈이 아니므로 CommonModule을 임포트해야함 - CLI_자동

// HomeComponent 임포트
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent], // HomeComponent 선언
  imports: [CommonModule],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {}
