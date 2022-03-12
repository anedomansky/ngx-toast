import { Injectable } from '@angular/core';
import { Position } from '../enums/Position';
import { Severity } from '../enums/Severity';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  create(title: string, message: string, severity: Severity, position: Position) { }

  createToast() { }

  createContainer() { }
}
