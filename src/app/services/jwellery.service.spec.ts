import { TestBed } from '@angular/core/testing';

import { JwelleryService } from './jwellery.service';

describe('JwelleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwelleryService = TestBed.get(JwelleryService);
    expect(service).toBeTruthy();
  });
});
