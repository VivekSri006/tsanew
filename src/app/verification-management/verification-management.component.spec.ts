import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationManagementComponent } from './verification-management.component';

describe('VerificationManagementComponent', () => {
  let component: VerificationManagementComponent;
  let fixture: ComponentFixture<VerificationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
