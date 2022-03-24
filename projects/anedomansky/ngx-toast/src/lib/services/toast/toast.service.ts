import { Inject, Injectable } from '@angular/core';
import { ToastConfig, ToastConfigToken, TOAST_CONFIG } from '../../configs/toast.config';
import { ToastDirective } from '../../directives/toast.directive';
import { Position } from '../../enums/Position';
import { Severity } from '../../enums/Severity';
import { ToastComponent } from '../../components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastConfig: ToastConfig;

  constructor(
    @Inject(TOAST_CONFIG) toastToken: ToastConfigToken,
  ) {
    this.toastConfig = {
      ...toastToken.config,
      ...toastToken.override,
    };
  }

  private createToast(title: string, message: string, override: Partial<ToastConfig> ,toastDirective: ToastDirective) {
    const viewContainerRef = toastDirective.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(ToastComponent);
    // TODO: use componentRef.instance.XYZ to initialize component's props
    // apply this.toastConfig to the props
  }

  private applyConfig(override: Partial<ToastConfig>) {
    this.toastConfig = {
      ...this.toastConfig,
      ...override,
    };
  }

  private createInfoToast(config: ToastConfig, toastDirective: ToastDirective) {
    this.createToast(toastDirective);
  }

  private createSuccessToast(config: ToastConfig, toastDirective: ToastDirective) {
    this.createToast(toastDirective);
  }

  private createWarningToast(config: ToastConfig, toastDirective: ToastDirective) {
    this.createToast(toastDirective);
  }

  private createErrorToast(config: ToastConfig, toastDirective: ToastDirective) {
    this.createToast(toastDirective);
  }

  create(config: ToastConfig, toastDirective: ToastDirective) {
    switch (config.severity) {
      case Severity.SUCCESS:
        this.createSuccessToast(config, toastDirective);
        break;
      case Severity.WARNING:
        this.createWarningToast(config, toastDirective);
        break;
      case Severity.ERROR:
        this.createErrorToast(config, toastDirective);
        break;
      default:
        this.createInfoToast(config, toastDirective);
        break;
    }
  }
}
