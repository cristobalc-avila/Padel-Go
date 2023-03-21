import { TestBed } from '@angular/core/testing';

import { LoguinGuardGuard } from './loguin-guard.guard';

describe('LoguinGuardGuard', () => {
  let guard: LoguinGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoguinGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
