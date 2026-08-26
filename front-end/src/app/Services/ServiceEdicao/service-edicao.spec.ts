import { TestBed } from '@angular/core/testing';

import { ServiceEdicao } from './service-edicao';

describe('ServiceEdicao', () => {
  let service: ServiceEdicao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEdicao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
