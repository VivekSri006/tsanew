import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { RolePermissionManagementComponent } from './role-permission-management/role-permission-management.component';
import { VerificationManagementComponent } from './verification-management/verification-management.component';
import { CustomerhistoryViewOrderComponent } from './customerhistory-view-order/customerhistory-view-order.component';
import { LocationManagementComponent } from './location-management/location-management.component';
import { EditNewCustomerComponent } from './edit-new-customer/edit-new-customer.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'add-new-customer', component: AddNewCustomerComponent },
  { path: 'role-permission-management', component: RolePermissionManagementComponent },
  { path: 'verification-management', component: VerificationManagementComponent },
  { path: 'edit-new-customer', component: EditNewCustomerComponent },
  {path: 'signup', component: SignupComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
