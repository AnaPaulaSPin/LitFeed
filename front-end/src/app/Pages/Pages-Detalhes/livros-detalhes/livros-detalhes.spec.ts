import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDetalhes } from './livros-detalhes';

describe('LivrosDetalhes', () => {
  let component: LivrosDetalhes;
  let fixture: ComponentFixture<LivrosDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(LivrosDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
