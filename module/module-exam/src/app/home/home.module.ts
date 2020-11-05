import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // HomeModule은 루트 모듈이 아니므로 CommonModule을 임포트해야함 - CLI_자동

// SharedModule 임포트 -> 공유 모듈은 기능 모듈에 의해 사용되므로 기능 모듈에 등록해준다.
import { SharedModule } from '../shared/shared.module';

// HomeComponent 임포트
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent], // HomeComponent 선언
  imports: [CommonModule, SharedModule],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {}
