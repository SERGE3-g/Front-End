import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrStrutturali2Component } from './dr-strutturali2.component';

describe('DrStrutturali2Component', () => {
  let component: DrStrutturali2Component;
  let fixture: ComponentFixture<DrStrutturali2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrStrutturali2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrStrutturali2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
