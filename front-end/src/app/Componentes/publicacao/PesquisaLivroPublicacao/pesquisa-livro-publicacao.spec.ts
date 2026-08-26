import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaLivroPublicacao } from './pesquisa-livro-publicacao';

describe('PesquisaLivroPublicacao', () => {
  let component: PesquisaLivroPublicacao;
  let fixture: ComponentFixture<PesquisaLivroPublicacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaLivroPublicacao],
    }).compileComponents();

    fixture = TestBed.createComponent(PesquisaLivroPublicacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
