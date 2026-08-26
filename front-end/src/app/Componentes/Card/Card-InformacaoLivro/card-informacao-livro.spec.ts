import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformacaoLivro } from './card-informacao-livro';

describe('CardInformacaoLivro', () => {
  let component: CardInformacaoLivro;
  let fixture: ComponentFixture<CardInformacaoLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInformacaoLivro],
    }).compileComponents();

    fixture = TestBed.createComponent(CardInformacaoLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
