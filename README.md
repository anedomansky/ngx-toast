# ngx-toast

An easy to use toast component.

## Features

- renders toasts into an optional target directive
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
import { FirstToastTestModule } from './components/first-toast-test-page/first-toast-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxToastModule.forRoot(),
    AppRoutingModule,
    FirstToastTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

## Props

## License

[MIT](https://mit-license.org/?msclkid=0221946bceb211ecb66762ca534c702d)
