import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondToastTestPageComponent } from '../components/second-toast-test-page/second-toast-test-page.component';
import { NgxToastModule } from '@anedomansky/ngx-toast';


@NgModule({
  declarations: [
    SecondToastTestPageComponent
  ],
  imports: [
    CommonModule,
    NgxToastModule.forRoot(),
  ]
})
export class SecondToastTestModule { }
