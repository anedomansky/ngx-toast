import { NgxToastModule } from '@anedomansky/ngx-toast';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SecondToastTestPageComponent } from './second-toast-test-page.component';
import { SecondToastTestRoutingModule } from './second-toast-test-routing/second-toast-test-routing.module';

@NgModule({
  declarations: [SecondToastTestPageComponent],
  imports: [CommonModule, NgxToastModule, SecondToastTestRoutingModule],
})
export class SecondToastTestModule {}
