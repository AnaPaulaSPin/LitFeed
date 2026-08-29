import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitanteNavBar } from './visitante-nav-bar';

describe('VisitanteNavBar', () => {
  let component: VisitanteNavBar;
  let fixture: ComponentFixture<VisitanteNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitanteNavBar],
    }).compileComponents();

    fixture = TestBed.createComponent(VisitanteNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
