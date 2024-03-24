import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistarComponent } from './auth-login/registar/registar.component';
import { LoginComponent } from './auth-login/login/login.component';
import { HomeComponent } from './auth-login/home/home.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSService } from './auth-login/admin-s.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ForgotPasswordComponent } from './auth-login/forgot-password/forgot-password.component';
import { ResetPwdComponent } from './auth-login/reset-pwd/reset-pwd.component';

const routes: Routes = [
  {
    path:'register',
    component:RegistarComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AdminSService]
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'reset/:token',
    component:ResetPwdComponent
  }
  // {
  //   path:'navbar',
  //   component:NavbarComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
