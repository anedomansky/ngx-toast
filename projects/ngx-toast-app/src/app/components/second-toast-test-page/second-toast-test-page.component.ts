import {
  Position,
  Severity,
  ToastDirective,
  ToastService,
} from '@anedomansky/ngx-toast';
import { Component, ViewChild } from '@angular/core';

interface Toast {
  severity: Severity;
  additonalClasses?: string;
}

@Component({
  selector: 'app-second-toast-test-page',
  templateUrl: './second-toast-test-page.component.html',
  styleUrls: ['./second-toast-test-page.component.scss'],
})
export class SecondToastTestPageComponent {
  additionalClasses = 'test';
  position = Position.BOTTOM_RIGHT;
  severity = Severity.SUCCESS;
  toasts: Toast[] = [];

  @ViewChild(ToastDirective, { static: true }) toast!: ToastDirective;

  constructor(public toastService: ToastService) {}

  createSuccessToast() {
    this.toastService.create('Title', 'Message text.', this.toast, {
      severity: Severity.SUCCESS,
    });
  }

  createInfoToast() {
    this.toastService.create('Title', 'Message text.', this.toast, {
      severity: Severity.INFO,
    });
  }

  createWarningToast() {
    this.toastService.create('Title', 'Message text.', this.toast, {
      severity: Severity.WARNING,
    });
  }

  createErrorToast() {
    this.toastService.create('Title', 'Message text.', this.toast, {
      severity: Severity.ERROR,
    });
  }
}
