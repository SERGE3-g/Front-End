import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDescriptionComponent } from './car-description.component';

describe('CarDescriptionComponent', () => {
  let component: CarDescriptionComponent;
  let fixture: ComponentFixture<CarDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
