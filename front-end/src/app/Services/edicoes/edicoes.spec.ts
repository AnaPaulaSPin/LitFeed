import { TestBed } from '@angular/core/testing';

import { Edicoes } from './edicoes';

describe('Edicoes', () => {
  let service: Edicoes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Edicoes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
