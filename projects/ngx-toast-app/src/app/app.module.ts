import { NgxToastModule } from '@anedomansky/ngx-toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {
//   NoopAnimationsModule,
// } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FirstToastTestModule } from './components/first-toast-test-page/first-toast-test.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    NgxToastModule.forRoot(),
    AppRoutingModule,
    FirstToastTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
