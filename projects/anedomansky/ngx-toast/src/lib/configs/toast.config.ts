import { InjectionToken } from '@angular/core';
import { Severity } from '../enums/Severity';

export interface ToastConfig {
    severity: Severity;
    closeBtn: boolean;
    progressBar: boolean;
    timeout: number;
}

export interface ToastConfigToken {
    config: ToastConfig;
    override: Partial<ToastConfig>;
}

export const defaultToastConfig: ToastConfig = {
    severity: Severity.INFO,
    closeBtn: true,
    progressBar: true,
    timeout: 5000,
};

/**
 * Stores the ToastComponent's configuration.
 */
export const TOAST_CONFIG = new InjectionToken<ToastConfigToken>('ToastConfig');
