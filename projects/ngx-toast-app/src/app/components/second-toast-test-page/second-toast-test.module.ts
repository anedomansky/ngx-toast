import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondToastTestPageComponent } from './second-toast-test-page.component';
import { NgxToastModule } from '@anedomansky/ngx-toast';
import { SecondToastTestRoutingModule } from './second-toast-test-routing/second-toast-test-routing.module';


@NgModule({
  declarations: [
    SecondToastTestPageComponent
  ],
  imports: [
    CommonModule,
    NgxToastModule,
    SecondToastTestRoutingModule,
  ]
})
export class SecondToastTestModule { }
