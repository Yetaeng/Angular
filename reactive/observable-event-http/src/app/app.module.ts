import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FormControl 클래스 사용을 위해 ReactiveFormsModule을 임포트
import { ReactiveFormsModule } from '@angular/forms';
//HttpClient 클래스 사용을 위해 HttpClientModule을 임포트
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormControl 클래스 사용을 위해 ReactiveFormsModule을 임포트
    ReactiveFormsModule,
    // HttpClient 클래스 사용을 위해 HttpClientModule 임포트
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
