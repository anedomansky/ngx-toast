import { InjectionToken } from '@angular/core';

import { Severity } from '../enums/Severity';

export interface ToastConfig {
  closeBtn: boolean;
  easeTime: number;
  progressBar: boolean;
  severity: Severity;
  timeout: number;
}

export interface ToastConfigToken {
  config: ToastConfig;
  override: Partial<ToastConfig>;
}

export const defaultToastConfig: ToastConfig = {
  closeBtn: true,
  easeTime: 300,
  progressBar: true,
  severity: Severity.INFO,
  timeout: 5000,
};

/**
 * Stores the ToastComponent's configuration.
 */
export const TOAST_CONFIG = new InjectionToken<ToastConfigToken>('ToastConfig');
