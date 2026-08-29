import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPublicacoes } from './area-publicacoes';

describe('AreaPublicacoes', () => {
  let component: AreaPublicacoes;
  let fixture: ComponentFixture<AreaPublicacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaPublicacoes],
    }).compileComponents();

    fixture = TestBed.createComponent(AreaPublicacoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
