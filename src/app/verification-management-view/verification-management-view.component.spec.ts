import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationManagementViewComponent } from './verification-management-view.component';

describe('VerificationManagementViewComponent', () => {
  let component: VerificationManagementViewComponent;
  let fixture: ComponentFixture<VerificationManagementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationManagementViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
