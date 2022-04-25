import { ComponentRef, Inject, Injectable } from '@angular/core';
import { ToastComponent } from '../../components/toast/toast.component';
import { ToastConfig, ToastConfigToken, TOAST_CONFIG } from '../../configs/toast.config';
import { ToastDirective } from '../../directives/toast.directive';

interface Toast {
  index: number;
  component: ComponentRef<ToastComponent>;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastConfig: ToastConfig;
  toasts: Toast[] = [];
  private index = 0;

  constructor(
    @Inject(TOAST_CONFIG) toastToken: ToastConfigToken,
  ) {
    this.toastConfig = {
      ...toastToken.config,
      ...toastToken.override,
    };
  }

  private add(component: ComponentRef<ToastComponent>) {
    this.toasts.push({ index: this.index, component });
    this.index += 1;
  }

  private createToast(title: string, message: string, toastDirective: ToastDirective) {
    const viewContainerRef = toastDirective.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(ToastComponent);
    componentRef.instance.title = title;
    componentRef.instance.message = message;
    componentRef.instance.severity = this.toastConfig.severity;
    this.add(componentRef);
  }

  private applyConfig(override: Partial<ToastConfig>) {
    this.toastConfig = {
      ...this.toastConfig,
      ...override,
    };
  }

  create(title: string, message: string, toastDirective: ToastDirective, override: Partial<ToastConfig> = {}) {
    this.applyConfig(override);
    this.createToast(title, message, toastDirective);
  }

  remove(toastIndex: number) {
    const toastToBeRemoved = this.toasts.find((toast) => toast.index === toastIndex);
    
    if (toastToBeRemoved) {
      toastToBeRemoved.component.destroy();
      this.toasts.splice(toastIndex, 1);
    }
  }

  clear() {
    this.toasts.forEach((toast) => toast.component.destroy());
    this.toasts = [];
    this.index = 0;
  }
}
