import { TestBed } from '@angular/core/testing';

import { ServiceLivraisonService } from './servicelivraison.service';

describe('ServicelivraisonService', () => {
    let service: ServiceLivraisonService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ServiceLivraisonService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
