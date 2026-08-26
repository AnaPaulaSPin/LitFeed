import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraCard } from './editora-card';

describe('EditoraCard', () => {
  let component: EditoraCard;
  let fixture: ComponentFixture<EditoraCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditoraCard],
    }).compileComponents();

    fixture = TestBed.createComponent(EditoraCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
