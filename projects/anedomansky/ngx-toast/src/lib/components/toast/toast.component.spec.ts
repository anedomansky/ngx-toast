import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastComponent ]
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
});
