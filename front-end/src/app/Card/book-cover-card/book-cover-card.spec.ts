import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCoverCard } from './book-cover-card';

describe('BookCoverCard', () => {
  let component: BookCoverCard;
  let fixture: ComponentFixture<BookCoverCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCoverCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BookCoverCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
