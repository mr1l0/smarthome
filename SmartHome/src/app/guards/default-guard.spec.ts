import { TestBed } from '@angular/core/testing';

import { DefaultGuard } from './default-guard';

describe('DefaultGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultGuard = TestBed.get(DefaultGuard);
    expect(service).toBeTruthy();
  });
});
