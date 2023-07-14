import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewCustomerComponent } from './edit-new-customer.component';

describe('EditNewCustomerComponent', () => {
  let component: EditNewCustomerComponent;
  let fixture: ComponentFixture<EditNewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
