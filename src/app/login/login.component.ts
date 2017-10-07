import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../Model/UserLogin';
import {ApiService} from '../shared/services/api.service';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;
  constructor(private _apiService:ApiService,private _router:Router,private _authService:AuthenticationService) { }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    if(this._authService.checkIfTokenExist()) {
      this._router.navigate(['/home']);
    }
  }

  onLogIn(form: NgForm) {
    let user:UserLogin= new UserLogin(form.value.email,form.value.password);
    if(user.email!= "" && user.email!=null &&user.email!=undefined && user.password!= "" && user.password!=null &&user.password!=undefined   ) {
      this.loading = true;
      this._apiService.post("/api/login",user).subscribe((data) => {
        if(data!=null) {
          this.loading = false;
          this._authService.saveNewToken(data['token'].toString(),user.email);
          this._router.navigate(['/home']);
           }
         }, err => {
                this.loading = false;
            }); 
  }
 }

}
