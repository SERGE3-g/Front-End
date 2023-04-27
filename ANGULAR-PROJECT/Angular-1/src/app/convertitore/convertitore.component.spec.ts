import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertitoreComponent } from './convertitore.component';

describe('ConvertitoreComponent', () => {
  let component: ConvertitoreComponent;
  let fixture: ComponentFixture<ConvertitoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertitoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
