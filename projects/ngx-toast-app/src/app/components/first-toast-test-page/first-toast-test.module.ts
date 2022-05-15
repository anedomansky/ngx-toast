import { NgxToastModule } from '@anedomansky/ngx-toast';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FirstToastTestPageComponent } from './first-toast-test-page.component';

@NgModule({
  declarations: [FirstToastTestPageComponent],
  imports: [CommonModule, NgxToastModule],
})
export class FirstToastTestModule {}
