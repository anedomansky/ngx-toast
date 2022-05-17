import { ComponentRef, Inject, Injectable } from '@angular/core';

import { ToastComponent } from '../../components/toast/toast.component';
import {
  TOAST_CONFIG,
  ToastConfig,
  ToastConfigToken,
} from '../../configs/toast.config';
import { ToastDirective } from '../../directives/toast.directive';

interface Toast {
  index: number;
  component: ComponentRef<ToastComponent>;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastConfig: ToastConfig;
  toasts: Toast[] = [];
  private index = 1;

  constructor(@Inject(TOAST_CONFIG) toastToken: ToastConfigToken) {
    this.toastConfig = {
      ...toastToken.config,
      ...toastToken.override,
    };
  }

  private add(component: ComponentRef<ToastComponent>) {
    this.toasts.push({ index: this.index, component });
    this.index += 1;
  }

  private createToast(
    title: string,
    message: string,
    toastDirective: ToastDirective
  ) {
    const viewContainerRef = toastDirective.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(ToastComponent);
    componentRef.instance.closeBtn = this.toastConfig.closeBtn;
    componentRef.instance.easeTime = this.toastConfig.easeTime;
    componentRef.instance.index = this.index;
    componentRef.instance.message = message;
    componentRef.instance.progressBar = this.toastConfig.progressBar;
    componentRef.instance.severity = this.toastConfig.severity;
    componentRef.instance.timeout = this.toastConfig.timeout;
    componentRef.instance.title = title;
    this.add(componentRef);
  }

  private applyConfig(override: Partial<ToastConfig>) {
    this.toastConfig = {
      ...this.toastConfig,
      ...override,
    };
  }

  /**
   * Creates a new toast.
   * @param title The toast's title
   * @param message The toast's message
   * @param toastDirective The toast container
   * @param override The configuration overrides
   */
  create(
    title: string,
    message: string,
    toastDirective: ToastDirective,
    override: Partial<ToastConfig> = {}
  ): void {
    this.applyConfig(override);
    this.createToast(title, message, toastDirective);
  }

  /**
   * Removes a specific toast by index.
   * @param toastIndex The toast's index
   * @returns
   */
  remove(toastIndex?: number): void {
    if (!toastIndex) {
      return;
    }

    const toastToBeRemoved = this.toasts.find(
      (toast) => toast.index === toastIndex
    );

    if (toastToBeRemoved) {
      toastToBeRemoved.component.destroy();
      this.toasts.splice(toastIndex, 1);
    }
  }

  /**
   * Removes all active toasts.
   */
  clear(): void {
    this.toasts.forEach((toast) => toast.component.destroy());
    this.toasts = [];
    this.index = 1;
  }
}
