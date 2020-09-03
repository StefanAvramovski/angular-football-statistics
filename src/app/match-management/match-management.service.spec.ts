import { TestBed, inject } from '@angular/core/testing';

import { MatchManagementService } from './match-management.service';

describe('MatchManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchManagementService]
    });
  });

  it('should be created', inject([MatchManagementService], (service: MatchManagementService) => {
    expect(service).toBeTruthy();
  }));
});
