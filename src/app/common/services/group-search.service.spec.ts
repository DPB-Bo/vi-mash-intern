import { TestBed } from '@angular/core/testing';

import { GroupSearchService } from './group-search.service';

describe('GroupSearchService', () => {
  let service: GroupSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
