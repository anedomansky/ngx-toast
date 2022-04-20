import { Component, Input } from '@angular/core';
import { Position } from '../../enums/Position';

@Component({
  selector: 'ngx-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent {
  @Input() position = Position.TOP_LEFT;
}
