import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPublicacao } from './card-publicacao';



describe('CardPublicacao', () => {
  let component: CardPublicacao;
  let fixture: ComponentFixture<CardPublicacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPublicacao],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPublicacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
