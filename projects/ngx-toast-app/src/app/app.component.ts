import { Component } from '@angular/core';
import { Position, Severity } from '@anedomansky/ngx-toast';

interface Toast {
  position: Position;
  severity: Severity;
  additonalClasses?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  additionalClasses = 'test';
  position = Position.TOP_LEFT;
  severity = Severity.SUCCESS;
  toasts: Toast[] = [];
}
