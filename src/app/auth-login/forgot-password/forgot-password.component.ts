import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
validForm!:FormGroup;
constructor(private authService:AuthService,private router:Router,private cookieService:CookieService){}
ngOnInit(): void {
    this.createForm()
}
createForm():void{
  this.validForm=new FormGroup({
    emailid:new FormControl()
  })
}
submit():void{
  console.log(this.validForm.value)
  this.authService.sendMail(this.validForm.value).subscribe((data)=>{
    console.log("Mail sent")
  })
}
}
