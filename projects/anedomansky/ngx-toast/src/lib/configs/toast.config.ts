import { InjectionToken } from '@angular/core';
import { Severity } from '../enums/Severity';

export interface ToastConfig {
    severity: Severity;
}

export interface ToastConfigToken {
    config: ToastConfig;
    override: Partial<ToastConfig>;
}

export const DefaultToastConfig: ToastConfig = {
    severity: Severity.INFO,
};

/**
 * Stores the ToastComponent's configuration.
 */
export const TOAST_CONFIG = new InjectionToken<ToastConfigToken>('ToastConfig');
