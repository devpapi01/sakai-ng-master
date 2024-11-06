import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelivreursComponent } from './listelivreurs.component';

describe('ListelivreursComponent', () => {
  let component: ListelivreursComponent;
  let fixture: ComponentFixture<ListelivreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListelivreursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListelivreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
