import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactsDeleteModalComponent } from '../admin-contacts-delete-modal.component';

describe('AdminContactsDeleteModalComponent', () => {
  let component: AdminContactsDeleteModalComponent;
  let fixture: ComponentFixture<AdminContactsDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContactsDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContactsDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
