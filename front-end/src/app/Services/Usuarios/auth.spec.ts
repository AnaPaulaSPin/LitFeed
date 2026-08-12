import { TestBed } from '@angular/core/testing';

import {UsuariosAuth } from './UsuariosAuth';

describe('Auth', () => {
  let service: UsuariosAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
