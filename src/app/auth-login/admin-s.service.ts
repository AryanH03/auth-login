import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APP_CONSTANT } from '../shared/constant/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AdminSService {

  constructor(private cookieService:CookieService) { }

  canActivate():boolean{
    if(this.cookieService.get("role")!==APP_CONSTANT.ADMIN_ROLE){
    }
    return this.cookieService.get("role")===APP_CONSTANT.ADMIN_ROLE;
  }
  
}
