import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecategorieComponent } from './listecategorie.component';

describe('ListecategorieComponent', () => {
  let component: ListecategorieComponent;
  let fixture: ComponentFixture<ListecategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListecategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
