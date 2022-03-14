import { Inject, Injectable } from '@angular/core';
import { Config, ToastConfigToken, TOAST_CONFIG } from '../../configs/toast.config';
import { ToastContainerDirective } from '../../directives/toast-container.directive';
import { Position } from '../../enums/Position';
import { Severity } from '../../enums/Severity';
import { ToastContainerService } from '../toast-container/toast-container.service';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastContainer?: ToastContainerDirective;
  toastConfig: Config;

  constructor(
    @Inject(TOAST_CONFIG) toastToken: ToastConfigToken,
    private toastContainerService: ToastContainerService
  ) {
    this.toastConfig = { ...toastToken.config };
  }

  create(title: string, message: string, severity: Severity, position: Position) {
    this.createToast();
  }

  private createToast() {
    const toastContainerElement = this.createToastContainer();
    // TODO: create ToastContainerRef
    // TODO: create ToastRef
    // TODO: create ToastComponent and attach to ToastContainerComponent
  }

  private createToastContainer() {
    if (!this.toastContainer) {
      return this.toastContainerService.getToastContainer();
    }

    return this.toastContainer?.getToastContainer() as HTMLElement;
  }
}
