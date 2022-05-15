import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondToastTestPageComponent } from './second-toast-test-page.component';

describe('SecondToastTestPageComponent', () => {
  let component: SecondToastTestPageComponent;
  let fixture: ComponentFixture<SecondToastTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondToastTestPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondToastTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
