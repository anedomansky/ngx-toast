import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxToastModule } from '@anedomansky/ngx-toast';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FirstToastTestModule } from './components/first-toast-test-page/first-toast-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxToastModule.forRoot(),
    AppRoutingModule,
    FirstToastTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
