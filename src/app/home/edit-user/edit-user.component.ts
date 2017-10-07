import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {GetUsers} from '../../Model/GetUser';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editMode:boolean;
  userId:number;
  userForm: FormGroup;
  currentUser;
  imageName='';
  public loading = true;
  constructor(private _apiService:ApiService,private _router:Router,private _activatedRoute:ActivatedRoute
              ) { 
                
              }

  ngOnInit() {
    this.getDataFromRoute();
     this.createForm();
  }

  getDataFromRoute() {
     this._activatedRoute.params.subscribe(
      (params: Params) => {
               this.userId = params['id'];
               if(this.userId!= undefined) {
                 this._apiService.get("/api/users/"+this.userId).subscribe(data => {
                      this.loading = false;
                      this.imageName=data["data"].avatar;
                      try{
                          this.userForm.setValue(data["data"]);
                      }catch(e) {

                      }
                      
                    });
                 
               } 
      }
    );
  }

  createForm() {
     this.userForm = new FormGroup({
      'id' : new FormControl(''),
      'first_name' : new FormControl('',Validators.required),
      'last_name' : new FormControl('',Validators.required)
         });
      }

       onSubmit() {
    this.loading = true;
    this._apiService.post("/api/users/"+this.userId,this.userForm.value).subscribe((data) => {
          this.loading = false;
          this._router.navigate(['/home/userlisting']);
         }, err => {
                this.loading = false;
            }); 
   }



}
