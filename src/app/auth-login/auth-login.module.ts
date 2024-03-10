import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarComponent } from './registar/registar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    RegistarComponent,
    LoginComponent,
    HomeComponent
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
    HomeComponent
  ]
})
export class AuthLoginModule { }
