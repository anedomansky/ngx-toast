import { Component, Input } from '@angular/core';
import { Severity } from '../../enums/Severity';

@Component({
  selector: 'ngx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() severity = Severity.INFO;
}
