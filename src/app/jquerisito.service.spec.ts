import { TestBed } from '@angular/core/testing';

import { JquerisitoService } from './jquerisito.service';

describe('JquerisitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JquerisitoService = TestBed.get(JquerisitoService);
    expect(service).toBeTruthy();
  });
});
