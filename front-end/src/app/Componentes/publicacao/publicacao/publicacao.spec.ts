import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacaoModel } from './publicacao';

describe('Publicacao', () => {
  let component: PublicacaoModel;
  let fixture: ComponentFixture<PublicacaoModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacaoModel],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacaoModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
