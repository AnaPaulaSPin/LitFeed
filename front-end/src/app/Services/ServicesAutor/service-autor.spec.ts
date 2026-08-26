import { TestBed } from '@angular/core/testing';

import { ServiceAutor } from './service-autor';

describe('ServiceAutor', () => {
  let service: ServiceAutor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAutor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
