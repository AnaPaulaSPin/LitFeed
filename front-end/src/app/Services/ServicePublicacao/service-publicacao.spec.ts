import { TestBed } from '@angular/core/testing';

import { ServicePublicacao } from './service-publicacao';

describe('ServicePublicacao', () => {
  let service: ServicePublicacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePublicacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
