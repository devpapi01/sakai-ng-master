import { TestBed } from '@angular/core/testing';

import { ProduitService } from './produitservice.service';

describe('ProduitserviceService', () => {
    let service: ProduitService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProduitService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
