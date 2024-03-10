import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONSTANT } from '../shared/constant/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  registerUser(body:any):Observable<any>{
    return this.http.post(APP_CONSTANT.BACKEND_URL+"register",body)
  }
  loginUser(body:any):Observable<any>{
    return this.http.post(APP_CONSTANT.BACKEND_URL+"login",body)
  }
  students():Observable<any>{
    // with credentials true will send all your credentials like cookies to server
    return this.http.get(APP_CONSTANT.BACKEND_URL+"student",{withCredentials:true});
  }

}
