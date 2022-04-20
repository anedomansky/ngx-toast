import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ToastComponent } from './components/toast/toast.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ToastDirective } from './directives/toast.directive';
import { defaultToastConfig, ToastConfig, TOAST_CONFIG } from './configs/toast.config';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ToastComponent,
    ToastContainerComponent,
    ToastDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToastComponent,
    ToastContainerComponent,
    ToastDirective,
  ]
})
export class NgxToastModule {
  /**
   * Ensures that the module is only loaded once.
   * 
   * @param parentModule 
   */
  constructor(@Optional() @SkipSelf() parentModule: NgxToastModule) {
    if (parentModule) {
      throw new Error('NgxToastModule is already loaded. Please add it only once.');
    }
  }

  /**
   * The user can pass an initial override that will be applied to the existing ToastComponent configuration.
   * 
   * @param override 
   * @returns 
   */
  static forRoot(override: Partial<ToastConfig> = {}): ModuleWithProviders<NgxToastModule> {
    return {
      ngModule: NgxToastModule,
      providers: [
        {
          provide: TOAST_CONFIG,
          useValue: {
            config: defaultToastConfig,
            override,
          }
        }
      ]
    }
  }
}
