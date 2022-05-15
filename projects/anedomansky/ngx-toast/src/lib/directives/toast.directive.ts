import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxToast]',
})
export class ToastDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
