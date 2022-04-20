import { TestBed } from '@angular/core/testing';
import { defaultToastConfig, ToastConfig, TOAST_CONFIG } from '../../configs/toast.config';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;
  let config: ToastConfig;

  beforeEach(() => {
    config = defaultToastConfig;
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TOAST_CONFIG,
          useValue: config,
        },
        ToastService,
      ],
    });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
