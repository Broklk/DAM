import { TestBed } from '@angular/core/testing';

import { MedicionesService } from './mediciones.service';

describe('MedicionesService', () => {
  let service: MedicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
