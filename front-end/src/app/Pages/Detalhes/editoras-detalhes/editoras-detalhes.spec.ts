import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorasDetalhes } from './editoras-detalhes';

describe('EditorasDetalhes', () => {
  let component: EditorasDetalhes;
  let fixture: ComponentFixture<EditorasDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorasDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorasDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
