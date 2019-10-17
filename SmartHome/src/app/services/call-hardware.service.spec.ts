import { TestBed } from '@angular/core/testing';

import { CallHardwareService } from './call-hardware.service';

describe('CallHardwareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallHardwareService = TestBed.get(CallHardwareService);
    expect(service).toBeTruthy();
  });
});
