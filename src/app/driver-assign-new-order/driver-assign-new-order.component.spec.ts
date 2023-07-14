import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAssignNewOrderComponent } from './driver-assign-new-order.component';

describe('DriverAssignNewOrderComponent', () => {
  let component: DriverAssignNewOrderComponent;
  let fixture: ComponentFixture<DriverAssignNewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverAssignNewOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAssignNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
