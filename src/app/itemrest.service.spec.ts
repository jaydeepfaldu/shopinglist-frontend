import { TestBed, inject } from '@angular/core/testing';

import { ItemrestService } from './itemrest.service';

describe('ItemrestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemrestService]
    });
  });

  it('should be created', inject([ItemrestService], (service: ItemrestService) => {
    expect(service).toBeTruthy();
  }));
});
