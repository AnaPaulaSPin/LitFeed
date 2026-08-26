import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNavBar } from './usuario';

describe('UsuarioNavBar', () => {
  let component: UsuarioNavBar;
  let fixture: ComponentFixture<UsuarioNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioNavBar],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
