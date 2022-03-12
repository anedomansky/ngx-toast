import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxToastContainer]',
})
export class ToastContainerDirective {

  constructor(private element: ElementRef) { }

  getToastContainer() {
    return this.element.nativeElement;
  }

}
