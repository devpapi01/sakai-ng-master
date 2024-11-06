import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListescommandesComponent } from './listescommandes.component';

describe('ListescommandesComponent', () => {
  let component: ListescommandesComponent;
  let fixture: ComponentFixture<ListescommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListescommandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListescommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
