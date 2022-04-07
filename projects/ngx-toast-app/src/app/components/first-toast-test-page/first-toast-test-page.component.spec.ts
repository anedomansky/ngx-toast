import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstToastTestPageComponent } from './first-toast-test-page.component';

describe('FirstToastTestPageComponent', () => {
  let component: FirstToastTestPageComponent;
  let fixture: ComponentFixture<FirstToastTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstToastTestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstToastTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
