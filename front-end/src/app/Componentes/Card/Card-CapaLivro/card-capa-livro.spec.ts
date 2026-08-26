import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCapaLivro } from './card-capa-livro';

describe('CardCapaLivro', () => {
  let component: CardCapaLivro;
  let fixture: ComponentFixture<CardCapaLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCapaLivro],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCapaLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
