import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../../enums/Position';

@Component({
  selector: 'ngx-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent implements OnInit {
  @Input() position?: Position;

  classes = 'toast-container toast-container--';

  constructor() { }

  ngOnInit(): void {
    this.classes = `${this.classes}${this.position}`;
  }

}
