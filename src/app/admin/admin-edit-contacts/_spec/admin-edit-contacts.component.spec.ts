import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditContactsComponent } from '../admin-edit-contacts.component';

describe('AdminEditContactsComponent', () => {
  let component: AdminEditContactsComponent;
  let fixture: ComponentFixture<AdminEditContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
