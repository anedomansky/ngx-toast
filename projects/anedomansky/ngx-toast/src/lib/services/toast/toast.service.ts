import { Inject, Injectable } from '@angular/core';
import { Config, ToastConfigToken, TOAST_CONFIG } from '../../configs/toast.config';
import { ToastDirective } from '../../directives/toast.directive';
import { Position } from '../../enums/Position';
import { Severity } from '../../enums/Severity';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastConfig: Config;

  constructor(
    @Inject(TOAST_CONFIG) toastToken: ToastConfigToken,
  ) {
    this.toastConfig = { ...toastToken.config };
  }

  create(title: string, message: string, severity: Severity, position: Position, toastDirective: ToastDirective) {
    this.createToast();
  }

  private createToast() {
    // TODO: implement like loadComponent()
  }
}
