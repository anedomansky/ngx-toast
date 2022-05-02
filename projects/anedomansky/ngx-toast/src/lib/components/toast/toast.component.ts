import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { ToastConfig } from '../../configs/toast.config';
import { Severity } from '../../enums/Severity';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'ngx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('inOut', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition('inactive => active, :enter', animate('{{ easeTime }}ms 100ms ease-in')),
      transition('active => removed, :leave', animate('{{ easeTime }}ms ease-out')),
    ])
  ],
})
export class ToastComponent implements ToastConfig, OnDestroy {
  /**
   * Specifies the theme of the toast.
   * 
   * @default info
   */
  @Input() severity = Severity.INFO;

  /**
   * The toast's title.
   */
  @Input() title?: string;

  /**
   * The toast's message.
   */
  @Input() message?: string;

  /**
   * Display the close button.
   * 
   * @default true
   */
  @Input() closeBtn = true;

  /**
   * Display the progress bar.
   * 
   * @default true
   */
  @Input() progressBar = true;

  /**
   * The Time in 'ms' until the toast is automatically removed.
   * 
   * @default 5000
   */
  @Input() timeout = 5000;

  /**
   * The Index is used in order to remove the toast via {@link ToastService}.
   */
  @Input() index?: number;

  @HostBinding('@inOut')
  state = {
    value: 'inactive',
    params: {
      easeTime: 300,
    }
  };

  width = -1;

  private timeToHide: number;

  private timeoutHandler: ReturnType<typeof setTimeout>;

  private intervalId: ReturnType<typeof setInterval>;

  constructor(public toastService: ToastService) {
    this.state = { ...this.state, value: 'active' };
    this.timeoutHandler = setTimeout(() => this.remove(), this.timeout);
    this.timeToHide = new Date().getTime() + this.timeout;
    this.intervalId = setInterval(() => this.updateProgressBar(), 10);
  }

  remove() {
    this.state = { ...this.state, value: 'removed' };
    setTimeout(() => this.toastService.remove(this.index), 300);
  }

  private updateProgressBar() {
    if (this.width === 0 || this.width === 100) {
      return;
    }

    const now = new Date().getTime();
    const remainingTime = this.timeToHide - now;
    this.width = (remainingTime / this.timeout) * 100;
    this.width = 100 - this.width;

    if (this.width <= 0) {
      this.width = 0;
    }

    if (this.width >= 100) {
      this.width = 100;
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutHandler);
    clearInterval(this.intervalId);
  }
}
