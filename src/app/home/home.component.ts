import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from '../shared/services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router,private _authenticationService:AuthenticationService) { }
   
   email:string;
  ngOnInit() {
    this.email=localStorage.getItem("user");
  }

  onlogOut() {
    try {
      this._authenticationService.removeToken();
        this._router.navigate(['/login']);
    }catch (e) {

    }
    
  }

}
