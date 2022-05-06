import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { defaultToastConfig, ToastConfig, TOAST_CONFIG } from '../../configs/toast.config';
import { ToastService } from '../../services/toast/toast.service';
import { ToastComponent } from './toast.component';


describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let config: ToastConfig;

  beforeEach(async () => {
    config = defaultToastConfig;

    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ToastComponent],
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
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toast heading', () => {
    const heading = fixture.nativeElement.querySelector('.toast__heading');

    expect(heading).toBeTruthy();
  });

  it('should render toast text', () => {
    const text = fixture.nativeElement.querySelector('.toast__text');

    expect(text).toBeTruthy();
  });

  it('should remove toast', waitForAsync(() => {
    jest.spyOn(component, 'remove');
    const btn = fixture.nativeElement.querySelector('.toast__close');

    expect(btn).toBeTruthy();

    btn.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.remove).toHaveBeenCalledTimes(1);
      expect(fixture.nativeElement.querySelector('.toast')).toBeNull();
    });
  }));

  it('should update progress bar', waitForAsync(() => {
    jest.spyOn(component, 'updateProgressBar');
    expect(component).toBeTruthy();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.updateProgressBar).toHaveBeenCalled();
    });
  }));

  it('should call keepAlive on mouseenter', waitForAsync(() => {
    jest.spyOn(component, 'keepAlive');
    const toast = fixture.nativeElement.querySelector('.toast');

    expect(toast).toBeTruthy();

    toast.dispatchEvent(new Event('mouseenter'));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.keepAlive).toHaveBeenCalledTimes(1);
    });
  }));

  it('should call resume on mouseleave', waitForAsync(() => {
    jest.spyOn(component, 'resume');
    const toast = fixture.nativeElement.querySelector('.toast');

    expect(toast).toBeTruthy();

    toast.dispatchEvent(new Event('mouseleave'));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.resume).toHaveBeenCalledTimes(1);
    });
  }));
});
