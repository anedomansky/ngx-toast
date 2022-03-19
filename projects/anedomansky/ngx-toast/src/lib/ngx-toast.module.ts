import { NgModule } from '@angular/core';
import { ToastComponent } from './components/toast/toast.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ToastDirective } from './directives/toast.directive';



@NgModule({
  declarations: [
    ToastComponent,
    ToastContainerComponent,
    ToastDirective,
  ],
  imports: [
  ],
  exports: [
    ToastComponent,
  ]
})
export class NgxToastModule { }
