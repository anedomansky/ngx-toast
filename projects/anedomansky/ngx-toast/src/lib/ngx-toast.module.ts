import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ToastComponent } from './components/toast/toast.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import {
  defaultToastConfig,
  TOAST_CONFIG,
  ToastConfig,
} from './configs/toast.config';
import { ToastDirective } from './directives/toast.directive';

@NgModule({
  declarations: [ToastComponent, ToastContainerComponent, ToastDirective],
  imports: [CommonModule],
  exports: [ToastComponent, ToastContainerComponent, ToastDirective],
})
export class NgxToastModule {
  /**
   * The user can pass an initial override that will be applied to the existing ToastComponent configuration.
   *
   * @param override
   * @returns
   */
  static forRoot(
    override: Partial<ToastConfig> = {}
  ): ModuleWithProviders<NgxToastModule> {
    return {
      ngModule: NgxToastModule,
      providers: [
        {
          provide: TOAST_CONFIG,
          useValue: {
            config: defaultToastConfig,
            override,
          },
        },
      ],
    };
  }
}
