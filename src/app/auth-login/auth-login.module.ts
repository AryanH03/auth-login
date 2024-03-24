import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarComponent } from './registar/registar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';



@NgModule({
  declarations: [
    RegistarComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPwdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    RegistarComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent
  ]
})
export class AuthLoginModule { }
