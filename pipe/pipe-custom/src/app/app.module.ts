import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [AppComponent, ReversePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
