import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstToastTestPageComponent } from '../components/first-toast-test-page/first-toast-test-page.component';
import { NgxToastModule } from '@anedomansky/ngx-toast';



@NgModule({
  declarations: [
    FirstToastTestPageComponent
  ],
  imports: [
    CommonModule,
    NgxToastModule.forRoot(),
  ]
})
export class FirstToastTestModule { }
