import { TestBed } from '@angular/core/testing';

import { LivreurserviceService } from './livreurservice.service';

describe('LivreurserviceService', () => {
  let service: LivreurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
