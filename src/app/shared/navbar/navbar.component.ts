import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private router:Router,private cookiedService:CookieService){}

  clicker():void{
 this.router.navigate(["/login"]);
}
isLoggedIn():boolean{
  return this.cookiedService.get("isLoggedIn")==='1';
}


}
