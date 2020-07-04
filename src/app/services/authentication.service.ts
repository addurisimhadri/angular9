import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
export class User{
  constructor(
    public status:string,
     ) {}  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(loginPayload) {
    //alert(loginPayload.username+""+loginPayload.password);
    let username=loginPayload.username;
    let password=loginPayload.password;
    return this.httpClient
      .post<any>("http://dev.wicore.in:8080/cmsapi/authenticate", { username, password})
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", userData.token);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          console.log("tokenStr::  "+tokenStr); 
          return userData;
        })      );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() { 
    sessionStorage.removeItem('username')
  }
  
}
