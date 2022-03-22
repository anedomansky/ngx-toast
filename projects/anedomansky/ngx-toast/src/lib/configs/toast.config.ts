import { InjectionToken } from '@angular/core';
import { Position } from '../enums/Position';
import { Severity } from '../enums/Severity';

export interface ToastConfig {
    title: string;
    message: string;
    severity?: Severity;
    position?: Position;
}

export interface ToastConfigToken {
    config: ToastConfig;
}

export const TOAST_CONFIG = new InjectionToken<ToastConfigToken>('ToastConfig');
