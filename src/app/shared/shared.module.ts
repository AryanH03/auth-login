import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactUsComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
