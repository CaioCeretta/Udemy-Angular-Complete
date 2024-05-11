import { TestBed } from '@angular/core/testing';

import { AssignmetAccountServiceService } from './assignmet-account-service.service';

describe('AssignmetAccountServiceService', () => {
  let service: AssignmetAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmetAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
