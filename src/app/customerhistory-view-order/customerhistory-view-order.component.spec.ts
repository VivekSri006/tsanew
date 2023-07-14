import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerhistoryViewOrderComponent } from './customerhistory-view-order.component';

describe('CustomerhistoryViewOrderComponent', () => {
  let component: CustomerhistoryViewOrderComponent;
  let fixture: ComponentFixture<CustomerhistoryViewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerhistoryViewOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerhistoryViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
