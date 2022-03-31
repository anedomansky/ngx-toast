import { Component, OnInit, ViewChild } from '@angular/core';
import { Position, Severity, ToastDirective, ToastService } from '@anedomansky/ngx-toast';

interface Toast {
  position: Position;
  severity: Severity;
  additonalClasses?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  additionalClasses = 'test';
  position = Position.TOP_LEFT;
  severity = Severity.SUCCESS;
  toasts: Toast[] = [];

  @ViewChild(ToastDirective, {static: true}) toast!: ToastDirective;

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
    console.log('init');
  }

  createToast() {
    console.log(this.toast);
    this.toastService.create("Title", "Message text.", this.toast);
  }
}
