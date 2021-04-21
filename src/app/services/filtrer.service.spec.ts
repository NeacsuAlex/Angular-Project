import { TestBed } from '@angular/core/testing';

import { FiltrerService } from './filtrer.service';

describe('FiltrerService', () => {
  let service: FiltrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
