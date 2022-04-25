import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultToastConfig, ToastConfig, TOAST_CONFIG } from '../configs/toast.config';
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
    <button type="button" class="btn--success" (click)="createSuccessToast()">Create Toast (Success)</button>
    <button type="button" class="btn--clear" (click)="clearToasts()">Clear Toasts</button>
    <button type="button" class="btn--remove" (click)="removeToast()">Remove Toast</button>
  `
})
class HostComponent {
  @ViewChild(ToastDirective, {static: true}) toast!: ToastDirective;

  constructor(public toastService: ToastService) {}

  createInfoToast() {
    this.toastService.create("Title", "Message text.", this.toast);
  }

  createSuccessToast() {
    this.toastService.create("Title", "Message text.", this.toast, { severity: Severity.SUCCESS });
  }

  clearToasts() {
    this.toastService.clear();
  }

  removeToast() {
    this.toastService.remove(0);
  }
}

describe('ToastDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let config: ToastConfig;
  let testToastService: ToastService;

  beforeEach(async () => {
    config = defaultToastConfig;

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

  it('should render toast with override', () => {
    jest.spyOn(testToastService, 'create');
    const btn = fixture.nativeElement.querySelector('.btn--success') as HTMLButtonElement;

    btn.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const toast = fixture.nativeElement.querySelector('.toast') as HTMLElement | null;

    expect(testToastService.create).toHaveBeenCalledTimes(1);
    expect(btn).toBeTruthy();
    expect(toast).toBeTruthy();
    expect(toast?.classList.contains('toast--success')).toBeTruthy();
  });

  it('should clear toasts', () => {
    jest.spyOn(testToastService, 'clear');
    const btn = fixture.nativeElement.querySelector('.btn') as HTMLButtonElement;
    const clearBtn = fixture.nativeElement.querySelector('.btn--clear') as HTMLButtonElement;
    
    expect(btn).toBeTruthy();

    btn.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const toast = fixture.nativeElement.querySelector('.toast');
    
    expect(toast).toBeTruthy();

    expect(clearBtn).toBeTruthy();

    clearBtn.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(testToastService.clear).toHaveBeenCalledTimes(1);
    expect(fixture.nativeElement.querySelector('.toast')).toBeNull();
  });

  it('should remove specific toast', () => {
    jest.spyOn(testToastService, 'remove');
    const btn = fixture.nativeElement.querySelector('.btn') as HTMLButtonElement;
    const removeBtn = fixture.nativeElement.querySelector('.btn--remove') as HTMLButtonElement;
    
    expect(btn).toBeTruthy();

    btn.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const toast = fixture.nativeElement.querySelector('.toast');
    
    expect(toast).toBeTruthy();

    expect(removeBtn).toBeTruthy();

    removeBtn.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(testToastService.remove).toHaveBeenCalledTimes(1);
    expect(testToastService.remove).toHaveBeenCalledWith(0);
    expect(fixture.nativeElement.querySelector('.toast')).toBeNull();
  });
});
