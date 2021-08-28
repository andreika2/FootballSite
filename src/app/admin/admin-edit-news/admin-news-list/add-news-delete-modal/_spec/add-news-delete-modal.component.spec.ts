import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsDeleteModalComponent } from '../add-news-delete-modal.component';

describe('AddNewsDeleteModalComponent', () => {
  let component: AddNewsDeleteModalComponent;
  let fixture: ComponentFixture<AddNewsDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewsDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
