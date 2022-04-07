import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxToastModule } from '@anedomansky/ngx-toast';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FirstToastTestModule } from './first-toast-test/first-toast-test.module';
import { SecondToastTestModule } from './second-toast-test/second-toast-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxToastModule.forRoot(),
    AppRoutingModule,
    FirstToastTestModule,
    SecondToastTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
