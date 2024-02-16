import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPizzaComponent } from './ajout-pizza.component';

describe('AjoutPizzaComponent', () => {
  let component: AjoutPizzaComponent;
  let fixture: ComponentFixture<AjoutPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
