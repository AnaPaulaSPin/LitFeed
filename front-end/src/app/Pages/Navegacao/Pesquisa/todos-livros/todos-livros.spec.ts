import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLivros } from './todos-livros';

describe('TodosLivros', () => {
  let component: TodosLivros;
  let fixture: ComponentFixture<TodosLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosLivros],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
