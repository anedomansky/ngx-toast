import { TestBed } from '@angular/core/testing';

import { ToastContainerService } from './toast-container.service';

describe('ToastContainerService', () => {
  let service: ToastContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
