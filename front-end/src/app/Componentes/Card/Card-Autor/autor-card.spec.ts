import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCard } from './autor-card';

describe('Autor', () => {
  let component: AutorCard;
  let fixture: ComponentFixture<AutorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
