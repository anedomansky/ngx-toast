import { Component, Input } from '@angular/core';

import { Position } from '../../enums/Position';

@Component({
  selector: 'ngx-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent {
  /**
   * Specifies the position of the toast container.
   *
   * @default top-left
   */
  @Input() position = Position.TOP_LEFT;
}
