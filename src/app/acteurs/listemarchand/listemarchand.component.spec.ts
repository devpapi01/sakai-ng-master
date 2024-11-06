import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemarchandComponent } from './listemarchand.component';

describe('ListemarchandComponent', () => {
  let component: ListemarchandComponent;
  let fixture: ComponentFixture<ListemarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListemarchandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListemarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
