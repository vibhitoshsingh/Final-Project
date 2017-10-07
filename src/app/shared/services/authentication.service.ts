import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  saveNewToken(token:string,email:string) {
    if(localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    localStorage.setItem("token",token);
    localStorage.setItem("user",email);
  }

  checkIfTokenExist():boolean {
     if(localStorage.getItem("token")) {
       return true;
     } else {
       return false
     }
  }

  removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

}
