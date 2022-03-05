import { Component } from '@angular/core';
import { Position } from '@anedomansky/ngx-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  additionalClasses = 'test';
  position = Position.TOP_LEFT;
}
