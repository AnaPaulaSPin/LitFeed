import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasEditoras } from './todas-editoras';

describe('TodasEditoras', () => {
  let component: TodasEditoras;
  let fixture: ComponentFixture<TodasEditoras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodasEditoras],
    }).compileComponents();

    fixture = TestBed.createComponent(TodasEditoras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
