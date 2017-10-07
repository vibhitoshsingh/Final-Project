import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {UserRegister} from '../Model/UserRegister';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {ApiService} from '../shared/services/api.service';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  loading=false;
  constructor(private _apiService:ApiService,private _router:Router,private _authService:AuthenticationService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.registrationForm = new FormGroup({
      'firstname' : new FormControl('',[Validators.required]),
      'lastname' : new FormControl('',[Validators.required]),
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'password' : new FormControl('',[Validators.required])
         });
  }

  onSubmit() {
    this.loading = true;
    this._apiService.post("/api/register",this.registrationForm.value).subscribe((data) => {
          this.loading = false;
          this._authService.saveNewToken(data['token'].toString(),this.registrationForm.value.email)
          this._router.navigate(['/home']);
         }, err => {
                this.loading = false;
            }); 
   }
}
