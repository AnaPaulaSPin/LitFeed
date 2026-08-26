import { TestBed } from '@angular/core/testing';

import { ServiceEditora } from './service-editora';

describe('ServiceEditora', () => {
  let service: ServiceEditora;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEditora);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
