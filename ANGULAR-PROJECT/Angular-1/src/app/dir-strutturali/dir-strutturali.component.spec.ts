import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStrutturaliComponent } from './dir-strutturali.component';

describe('DirStrutturaliComponent', () => {
  let component: DirStrutturaliComponent;
  let fixture: ComponentFixture<DirStrutturaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStrutturaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirStrutturaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
