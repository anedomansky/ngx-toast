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
  selector: 'app-first-toast-test-page',
  templateUrl: './first-toast-test-page.component.html',
  styleUrls: ['./first-toast-test-page.component.scss'],
})
export class FirstToastTestPageComponent {
  additionalClasses = 'test';
  position = Position.TOP_RIGHT;
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
