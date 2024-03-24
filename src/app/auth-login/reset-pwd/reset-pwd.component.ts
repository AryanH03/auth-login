import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivateChildFn, Router } from '@angular/router';
import { AdminSService } from '../admin-s.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit{
  fpToken!:string;
  constructor(private route:ActivatedRoute,private router:Router,private AdminSService:AuthService){}
  changePwd!:FormGroup
  ngOnInit(): void {
      this.route.params.subscribe((params:any)=>{
        this.fpToken = params.token
        this.AdminSService.verifyToken(this.fpToken).subscribe((value:any)=>{
          console.log(value)
        }
        )
      })
      this.createForm()
  }
  createForm():void{
   this.changePwd=new FormGroup({
    password : new FormControl(),
    c_password : new FormControl()
   }) 
  }
  submit():void{
    if(this.changePwd.get('password')?.value===this.changePwd.get('c_password')?.value){
      this.AdminSService.changePassword(this.changePwd.get('password')?.value,this.fpToken)
    }
    this.router.navigate(["/dashboard"]);
  }
}
