import { TestBed } from '@angular/core/testing';

import { AdressenService } from './adressen.service';

describe('AdressenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdressenService = TestBed.get(AdressenService);
    expect(service).toBeTruthy();
  });
});
