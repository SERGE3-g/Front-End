import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungereComponent } from './aggiungere.component';

describe('AggiungereComponent', () => {
  let component: AggiungereComponent;
  let fixture: ComponentFixture<AggiungereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
