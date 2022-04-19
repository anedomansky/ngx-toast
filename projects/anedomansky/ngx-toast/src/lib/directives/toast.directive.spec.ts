import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultToastConfig, ToastConfig, TOAST_CONFIG } from '../configs/toast.config';
import { Severity } from '../enums/Severity';
import { NgxToastModule } from '../ngx-toast.module';
import { ToastService } from '../services/toast/toast.service';
import { ToastDirective } from './toast.directive';

@Component({
  template: `
    <div class="host">
      <ng-template toast></ng-template>
    </div>
    <button type="button" class="btn" (click)="createInfoToast()">Create Toast</button>
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
  let testToastService: ToastService;

  beforeEach(async () => {
    config = DefaultToastConfig;

    await TestBed.configureTestingModule({
      imports: [NgxToastModule],
      declarations: [ HostComponent, ToastDirective ],
      providers: [
        {
          provide: TOAST_CONFIG,
          useValue: config,
        },
        ToastService,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    testToastService = TestBed.inject(ToastService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toast', () => {
    jest.spyOn(testToastService, 'create');
    const btn = fixture.nativeElement.querySelector('.btn') as HTMLButtonElement;

    btn.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const toast = fixture.nativeElement.querySelector('.toast');

    expect(testToastService.create).toHaveBeenCalledTimes(1);
    expect(btn).toBeTruthy();
    expect(toast).toBeTruthy();
  });
});
