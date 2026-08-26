import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosUsuarios } from './todos-usuarios';

describe('TodosUsuarios', () => {
  let component: TodosUsuarios;
  let fixture: ComponentFixture<TodosUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosUsuarios],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosUsuarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
