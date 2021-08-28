import { TestBed } from '@angular/core/testing';

import { AddNewListService } from '../add-new-list.service';

describe('AddNewListService', () => {
  let service: AddNewListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
