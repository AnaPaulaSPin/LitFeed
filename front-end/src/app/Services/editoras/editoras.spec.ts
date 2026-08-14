import { TestBed } from '@angular/core/testing';

import { Editoras } from './editoras';

describe('Editoras', () => {
  let service: Editoras;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Editoras);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
