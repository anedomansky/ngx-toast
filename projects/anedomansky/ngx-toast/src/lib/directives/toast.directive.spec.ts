import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultToastConfig, ToastConfig, TOAST_CONFIG } from '../configs/toast.config';
import { Severity } from '../enums/Severity';
import { ToastService } from '../services/toast/toast.service';
import { ToastDirective } from './toast.directive';

@Component({
  template: `
    <div class="host">
      <ng-template toast></ng-template>
      <button type="button" class="btn" (click)="createInfoToast()">Create Toast</button>
    </div>
  `
})
class HostComponent {
  @ViewChild(ToastDirective, {static: true}) toast!: ToastDirective;

  constructor(public toastService: ToastService) {}

  createInfoToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.INFO });
  }
}

describe('ToastDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let config: ToastConfig;

  beforeEach(async () => {
    config = DefaultToastConfig;

    await TestBed.configureTestingModule({
      declarations: [ HostComponent ],
      providers: [
        {
          provide: TOAST_CONFIG,
          useValue: config,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render host by default', () => {
  //   const container = componentContainer.querySelector('.host');
  //   const btn = componentContainer.querySelector('.btn') as HTMLButtonElement;

  //   btn.click();

  //   changeFunction({});

  //   const toast = componentContainer.querySelector('.toast');

  //   expect(container).toBeTruthy();
  //   expect(toast).toBeTruthy();
  // });
});
