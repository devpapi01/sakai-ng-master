import { TestBed } from '@angular/core/testing';

import { MarchandserviceService } from './marchandservice.service';

describe('MarchandserviceService', () => {
  let service: MarchandserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarchandserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
