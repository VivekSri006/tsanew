import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverHistoryViewOrderComponent } from './driver-history-view-order.component';

describe('DriverHistoryViewOrderComponent', () => {
  let component: DriverHistoryViewOrderComponent;
  let fixture: ComponentFixture<DriverHistoryViewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverHistoryViewOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverHistoryViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
