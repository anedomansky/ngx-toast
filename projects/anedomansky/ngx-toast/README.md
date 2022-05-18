# ngx-toast

An easy to use toast component.

## Features

- renders toasts into a target toast container
- [Angular animations](https://angular.io/guide/animations?msclkid=dc2c1c30ceb411ec93736e7df53f3363)
- lazy loading compatible

## Dependencies

| ngx-toast | Angular |
|-----------|---------|
| current   | >= 13   |

## Installation

### Requirements

```cli
npm install @angular/animations
```

### Install

```cli
npm install @anedomansky/ngx-toast
```

## Setup

Add `BrowserAnimationsModule` and `NgxToastModule`:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxToastModule } from '@anedomansky/ngx-toast';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxToastModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

`app.component.html`:
```html
<section class="btn-container">
    <button class="btn btn--success" (click)="createSuccessToast()">Success</button>
    <button class="btn btn--info" (click)="createInfoToast()">Info</button>
    <button class="btn btn--warning" (click)="createWarningToast()">Warning</button>
    <button class="btn btn--error" (click)="createErrorToast()">Error</button>
</section>
<ngx-toast-container [position]="position">
    <ng-template ngxToast></ng-template>
</ngx-toast-container>
```

`app.component.ts`:
```ts
import { Component, ViewChild } from '@angular/core';
import { Position, Severity, ToastDirective, ToastService } from '@anedomansky/ngx-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  additionalClasses = 'test';
  position = Position.TOP_LEFT;
  severity = Severity.SUCCESS;

  @ViewChild(ToastDirective, {static: true}) toast!: ToastDirective;

  constructor(public toastService: ToastService) {}

  createSuccessToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.SUCCESS });
  }

  createInfoToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.INFO });
  }

  createWarningToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.WARNING });
  }

  createErrorToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.ERROR });
  }
}
```

## Component Props

`ToastContainer` (`ngx-toast-container`):

| Name | Type | Default | Description |
|-----------|---------|---------|---------|
| position   | Position | 'top-left' | Specifies the position of the toast container.


`ToastComponent` (`ngx-toast`):

| Name | Type | Default | Description |
|-----------|---------|---------|---------|
| additionalClasses | string |  | Additional CSS-classes that will be appended to the '.toast' (Separated by whitespace).
| closeBtn | boolean | true  | Display the close button.
| easeTime | number | 300  | Animation time in 'ms'.
| index | number |  | The Index is used in order to remove the toast via `ToastService`.
| progressBar | boolean | true  | Display the progress bar.
| severity | Severity | 'info'  | Specifies the theme of the toast.
| timeout | number | 5000  | The time in 'ms' until the toast is automatically removed.
| title | string |  | The toast's title.

## License

[MIT](https://mit-license.org/?msclkid=0221946bceb211ecb66762ca534c702d)
