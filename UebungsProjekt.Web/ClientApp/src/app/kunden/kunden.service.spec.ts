import { TestBed } from '@angular/core/testing';

import { KundenService } from './kunden.service';

describe('KundenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KundenService = TestBed.get(KundenService);
    expect(service).toBeTruthy();
  });
});
