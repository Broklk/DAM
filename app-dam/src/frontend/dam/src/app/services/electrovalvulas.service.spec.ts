import { TestBed } from '@angular/core/testing';

import { ElectrovalvulasService } from './electrovalvulas.service';

describe('ElectrovalvulasService', () => {
  let service: ElectrovalvulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectrovalvulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
