import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleContentProjectionComponent } from './single-content-projection.component';
import { MultiContentProjectionComponent } from './multi-content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleContentProjectionComponent,
    MultiContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
