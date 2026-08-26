import { TestBed } from '@angular/core/testing';

import { ServiceGenero } from './service-genero';

describe('ServiceGenero', () => {
  let service: ServiceGenero;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGenero);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
