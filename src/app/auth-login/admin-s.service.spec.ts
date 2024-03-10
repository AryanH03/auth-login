import { TestBed } from '@angular/core/testing';

import { AdminSService } from './admin-s.service';

describe('AdminSService', () => {
  let service: AdminSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
