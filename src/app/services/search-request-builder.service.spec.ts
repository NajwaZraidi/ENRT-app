import { TestBed } from '@angular/core/testing';

import { SearchRequestBuilderService } from './search-request-builder.service';

describe('SearchRequestBuilderService', () => {
  let service: SearchRequestBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRequestBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
