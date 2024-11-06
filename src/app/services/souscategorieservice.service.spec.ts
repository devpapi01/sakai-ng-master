import { TestBed } from '@angular/core/testing';

import { SouscategorieserviceService } from './souscategorieservice.service';

describe('SouscategorieserviceService', () => {
  let service: SouscategorieserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouscategorieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
