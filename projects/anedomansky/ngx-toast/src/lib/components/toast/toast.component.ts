import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../../enums/Position';
import { Severity } from '../../enums/Severity';

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
