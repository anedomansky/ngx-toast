import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondToastTestPageComponent } from '../components/second-toast-test-page/second-toast-test-page.component';
import { NgxToastModule } from '@anedomansky/ngx-toast';
import { SecondToastTestRoutingModule } from '../components/second-toast-test-page/second-toast-test-routing/second-toast-test-routing.module';


@NgModule({
  declarations: [
    SecondToastTestPageComponent
  ],
  imports: [
    CommonModule,
    NgxToastModule.forRoot(),
    SecondToastTestRoutingModule,
  ]
})
export class SecondToastTestModule { }
