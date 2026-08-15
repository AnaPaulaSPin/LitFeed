import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trendings } from './trendings';

describe('Trendings', () => {
  let component: Trendings;
  let fixture: ComponentFixture<Trendings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trendings],
    }).compileComponents();

    fixture = TestBed.createComponent(Trendings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
