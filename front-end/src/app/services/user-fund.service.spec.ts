import { TestBed } from '@angular/core/testing';

import { UserFundService } from './user-fund.service';

describe('UserFundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFundService = TestBed.get(UserFundService);
    expect(service).toBeTruthy();
  });
});
