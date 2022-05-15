import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecondToastTestPageComponent } from '../second-toast-test-page.component';

const routes: Routes = [
  {
    path: '',
    component: SecondToastTestPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondToastTestRoutingModule {}
