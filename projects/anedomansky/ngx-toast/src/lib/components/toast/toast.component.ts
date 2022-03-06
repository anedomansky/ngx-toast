import { Component, Input, OnInit } from '@angular/core';

export enum Position {
  TOP_RIGHT = 'top-right',
  TOP_LEFT = 'top-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_LEFT = 'bottom-left',
}

export enum Severity {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

@Component({
  selector: 'ngx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() position?: Position;
  @Input() severity?: Severity;
  @Input() additionalClassNames?: string;

  classes = 'toast toast--';

  constructor() { }

  ngOnInit(): void {
    this.classes = `${this.classes}${this.position} ${this.severity} ${this.additionalClassNames}`;
  }

}
