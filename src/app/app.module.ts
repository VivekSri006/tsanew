import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { BrowserModule } from '@angular/platform-browser';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { DriverAssignNewOrderComponent } from './driver-assign-new-order/driver-assign-new-order.component';
import { RolePermissionManagementComponent } from './role-permission-management/role-permission-management.component';
import { VerificationManagementComponent } from './verification-management/verification-management.component';
import { CustomerhistoryViewOrderComponent } from './customerhistory-view-order/customerhistory-view-order.component';
import { LocationManagementComponent } from './location-management/location-management.component';
import { DriverHistoryViewOrderComponent } from './driver-history-view-order/driver-history-view-order.component';
import { VerificationManagementViewComponent } from './verification-management-view/verification-management-view.component';
import { EditNewCustomerComponent } from './edit-new-customer/edit-new-customer.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SidenavComponent,
    DashboardComponent,
    HeaderComponent,
    CustomerManagementComponent,
    CustomerDetailsComponent,
    AddNewCustomerComponent,
    DriverAssignNewOrderComponent,
    RolePermissionManagementComponent,
    VerificationManagementComponent,
    CustomerhistoryViewOrderComponent,
    LocationManagementComponent,
    DriverHistoryViewOrderComponent,
    VerificationManagementViewComponent,
    EditNewCustomerComponent,
    IndexPageComponent,
    SignupComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AngularFileUploaderModule,
    NgxSliderModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
