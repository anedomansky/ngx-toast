import { Component, Input } from '@angular/core';
import { ToastConfig } from '../../configs/toast.config';
import { Severity } from '../../enums/Severity';

@Component({
  selector: 'ngx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements ToastConfig {
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
}
