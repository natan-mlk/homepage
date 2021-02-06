import { TestBed } from '@angular/core/testing';

import { DatabaseRequestService } from './database-request.service';

describe('DatabaseRequestService', () => {
  let service: DatabaseRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
