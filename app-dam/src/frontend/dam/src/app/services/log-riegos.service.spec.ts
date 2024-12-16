import { TestBed } from '@angular/core/testing';

import { LogRiegosService } from './log-riegos.service';

describe('LogRiegosService', () => {
  let service: LogRiegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogRiegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
