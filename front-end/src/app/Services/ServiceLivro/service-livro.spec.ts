import { TestBed } from '@angular/core/testing';

import { ServiceLivro } from './service-livro';

describe('ServiceLivro', () => {
  let service: ServiceLivro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLivro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
