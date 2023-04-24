import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminiECondizioniComponent } from './termini-e-condizioni.component';

describe('TerminiECondizioniComponent', () => {
  let component: TerminiECondizioniComponent;
  let fixture: ComponentFixture<TerminiECondizioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminiECondizioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminiECondizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
