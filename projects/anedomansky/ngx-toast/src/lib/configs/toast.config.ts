import { InjectionToken } from '@angular/core';
import { Position } from '../enums/Position';
import { Severity } from '../enums/Severity';

export interface ToastConfig {
    severity?: Severity;
    position?: Position;
}

export interface ToastConfigToken {
    config: ToastConfig;
    override: Partial<ToastConfig>;
}

export const DefaultToastConfig: ToastConfig = {
    severity: Severity.INFO,
    position: Position.TOP_LEFT,
};

/**
 * Stores the ToastComponent's configuration.
 */
export const TOAST_CONFIG = new InjectionToken<ToastConfigToken>('ToastConfig');
