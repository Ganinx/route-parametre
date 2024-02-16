import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBurgerComponent } from './ajout-burger.component';

describe('AjoutBurgerComponent', () => {
  let component: AjoutBurgerComponent;
  let fixture: ComponentFixture<AjoutBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutBurgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
