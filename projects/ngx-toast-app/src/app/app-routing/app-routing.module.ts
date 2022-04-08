import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstToastTestPageComponent } from '../components/first-toast-test-page/first-toast-test-page.component';

const routes: Routes = [
  {
    path: 'first-toast-test',
    component: FirstToastTestPageComponent,
  },
  {
    path: 'second-toast-test',
    loadChildren: () => import('../second-toast-test/second-toast-test.module').then((m) => m.SecondToastTestModule),
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
