import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAutores } from './todos-autores';

describe('TodosAutores', () => {
  let component: TodosAutores;
  let fixture: ComponentFixture<TodosAutores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosAutores],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosAutores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
