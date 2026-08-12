import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPesquisarLivro } from './card-pesquisar-livro';

describe('CardPesquisarLivro', () => {
  let component: CardPesquisarLivro;
  let fixture: ComponentFixture<CardPesquisarLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPesquisarLivro],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPesquisarLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
