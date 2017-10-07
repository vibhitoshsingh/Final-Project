import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CreateUser} from '../../Model/CreateUser';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  loading=false;

  constructor(private _apiService:ApiService,private _router:Router,private _activatedRoute:ActivatedRoute) {
                 
     this.createForm();
   }

  ngOnInit() {
  }
  
  createForm() {
    this.userForm = new FormGroup({
      'name' : new FormControl('',[Validators.required]),
      'job' : new FormControl('',[Validators.required])
         });
  }

  onSubmit() {
    this.loading = true;
    this._apiService.post("/api/users",this.userForm.value).subscribe((data) => {
          this.loading = false;
          this._router.navigate(['/home/userListing']);
         }, err => {
                this.loading = false;
            }); 
   }

 }
