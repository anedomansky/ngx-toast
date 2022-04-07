import { Component, ViewChild } from '@angular/core';
import { Position, Severity, ToastDirective, ToastService } from '@anedomansky/ngx-toast';

interface Toast {
  severity: Severity;
  additonalClasses?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  additionalClasses = 'test';
  position = Position.TOP_LEFT;
  severity = Severity.SUCCESS;
  toasts: Toast[] = [];

  @ViewChild(ToastDirective, {static: true}) toast!: ToastDirective;

  constructor(public toastService: ToastService) {}

  createSuccessToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.SUCCESS });
  }

  createInfoToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.INFO });
  }

  createWarningToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.WARNING });
  }

  createErrorToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.ERROR });
  }
}
