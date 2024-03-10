import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: any;
  constructor(private AuthService:AuthService,private router:Router,private cookiedService:CookieService){}
  listOfStudent!:[]

  isLoggedIn():boolean{
    return this.cookiedService.get("isLoggedIn")==='1';
  }
  ngOnInit(): void {
    this.getStudent()
  }
  getStudent():void{
    this.AuthService.students().subscribe({
      next:(data)=>{
        console.log(data)
        this.students=data;
      },
      error:(error)=>{
        console.log("error",error);
        if(error.status===401){
          this.router.navigate(["/login"]);
        }
        if(error.status===500){
          this.router.navigate(["/contact-us"]);
        }
      }
    })
  }

}
