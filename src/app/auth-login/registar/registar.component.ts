import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit{
registerForm!:FormGroup
constructor(private AuthService:AuthService,private router:Router){}
ngOnInit(): void {
    this.createForm();
}
createForm():void{
  this.registerForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    fullname:new FormControl()
  })
}
submit():void{
  console.log(this.registerForm);
  this.AuthService.registerUser(this.registerForm.value).subscribe((value)=>{
    console.log("Registered")
    this.router.navigate(["/login"])
  })
}
}
