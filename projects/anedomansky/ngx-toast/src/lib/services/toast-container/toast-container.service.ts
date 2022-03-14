import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastContainerService implements OnDestroy {
  private container!: HTMLElement;

  constructor(@Inject(DOCUMENT) private renderedDocument: Document) { }

  ngOnDestroy(): void {
      if (this.container) {
        this.container.parentNode?.removeChild(this.container);
      }
  }

  getToastContainer() {
    if (!this.container) {
      this.createContainer();
    }

    return this.container;
  }

  private createContainer() {
    const containerElement = this.renderedDocument.createElement('section');
    containerElement.classList.add('toast-container');
    this.renderedDocument.body.appendChild(containerElement);
    this.container = containerElement;
  }
}
