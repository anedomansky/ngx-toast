import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstToastTestPageComponent } from '../components/first-toast-test-page/first-toast-test-page.component';
import { SecondToastTestPageComponent } from '../components/second-toast-test-page/second-toast-test-page.component';

const routes: Routes = [
  {
    path: 'first-toast-test',
    component: FirstToastTestPageComponent,
  },
  {
    path: 'second-toast-test',
    component: SecondToastTestPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
