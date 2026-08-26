import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaPublicacao } from './cria-publicacao';

describe('CriaPublicacao', () => {
  let component: CriaPublicacao;
  let fixture: ComponentFixture<CriaPublicacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaPublicacao],
    }).compileComponents();

    fixture = TestBed.createComponent(CriaPublicacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
