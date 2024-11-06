import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelivraisonComponent } from './servicelivraison.component';

describe('ServicelivraisonComponent', () => {
  let component: ServicelivraisonComponent;
  let fixture: ComponentFixture<ServicelivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicelivraisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicelivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
