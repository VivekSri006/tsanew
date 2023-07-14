import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePermissionManagementComponent } from './role-permission-management.component';

describe('RolePermissionManagementComponent', () => {
  let component: RolePermissionManagementComponent;
  let fixture: ComponentFixture<RolePermissionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePermissionManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePermissionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
