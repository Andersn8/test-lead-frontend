import { TestBed } from '@angular/core/testing';

import { TrransactionService } from './trransaction.service';

describe('TrransactionService', () => {
  let service: TrransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
