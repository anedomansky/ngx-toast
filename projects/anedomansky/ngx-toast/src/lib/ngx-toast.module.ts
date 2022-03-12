import { NgModule } from '@angular/core';
import { ToastComponent } from './components/toast/toast.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ToastContainerDirective } from './directives/toast-container.directive';



@NgModule({
  declarations: [
    ToastComponent,
    ToastContainerComponent,
    ToastContainerDirective,
  ],
  imports: [
  ],
  exports: [
    ToastComponent,
  ]
})
export class NgxToastModule { }
