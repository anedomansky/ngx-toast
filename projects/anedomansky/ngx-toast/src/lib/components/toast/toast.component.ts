import { Component, Input, OnInit } from '@angular/core';
import { Severity } from '../../enums/Severity';

@Component({
  selector: 'ngx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() severity?: Severity;

  classes = 'toast toast--';

  constructor() { }

  ngOnInit(): void {
    this.classes = `${this.classes}${this.severity}`;
  }

}
