import { InjectionToken } from '@angular/core';

export interface Config {

}

export interface ToastConfigToken {
    config: Config;
}

export const TOAST_CONFIG = new InjectionToken<ToastConfigToken>('ToastConfig');
