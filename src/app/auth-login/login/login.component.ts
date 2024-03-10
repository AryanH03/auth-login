import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  constructor(private AuthService:AuthService,private router:Router,private cookieService:CookieService){}
ngOnInit(): void {
    this.createForm()
}
createForm():void{
  this.loginForm=new FormGroup({
    username:new FormControl(),
    password: new FormControl()
  })
}

submit():void{
  console.log(this.loginForm);
  this.AuthService.loginUser(this.loginForm.value).subscribe((value)=>{
    console.log(value)
    if(value.validYN===1){
      this.cookieService.set("token",value.token);
      this.cookieService.set("username",value.username);
      this.cookieService.set("userid",value.userid);
      this.cookieService.set("isLoggedIn","1");
      this.router.navigate(["/home"]);
    }
  })
}
}
