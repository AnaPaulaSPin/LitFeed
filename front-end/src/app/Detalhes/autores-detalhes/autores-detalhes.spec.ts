import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresDetalhes } from './autores-detalhes';

describe('AutoresDetalhes', () => {
  let component: AutoresDetalhes;
  let fixture: ComponentFixture<AutoresDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoresDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoresDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
