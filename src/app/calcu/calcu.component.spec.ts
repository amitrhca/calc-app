import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuComponent } from './calcu.component';

describe('CalcuComponent', () => {
  let component: CalcuComponent;
  let fixture: ComponentFixture<CalcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
