import { TestBed } from '@angular/core/testing';

import { AdminEditContactsService } from '../admin-edit-contacts.service';

describe('AdminEditContactsService', () => {
  let service: AdminEditContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEditContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
