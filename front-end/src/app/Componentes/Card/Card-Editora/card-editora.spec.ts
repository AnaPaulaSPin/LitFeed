import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditora } from './card-editora';

describe('EditoraCard', () => {
  let component: CardEditora;
  let fixture: ComponentFixture<CardEditora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEditora],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEditora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
