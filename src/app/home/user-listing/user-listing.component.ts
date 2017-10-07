import { Component, OnInit } from '@angular/core';
import {GetUsers} from '../../Model/GetUser';
import {ApiService} from '../../shared/services/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
   public loading = false;
   public currentPage:number=1;
   public perPage:number=4;
   public users;
  constructor(private _apiService:ApiService,private _router:Router) {
    
   }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this._apiService.get("/api/users?page="+this.currentPage +"&&per_page="+this.perPage).subscribe((data) => {
        if(data!=null) {
          this.users=data['data'];
          this.loading = false;
           }
         }, err => {
                this.loading = false;
            }); 
  }

  onEdit(UserId) {
     this._router.navigate(['/home/editUser',UserId])
  }

  onDelete(UserId:number) {
    this.loading = true;
    this._apiService.delete("/api/users/"+UserId).subscribe(data => {
      try{
        this.loading = false;
     this.users.splice(this.getIndexFromArray(this.users,UserId),1);
     }catch(e){}
   }, err => {
                this.loading = false;
            });
  }

  onPrev() {
     this.currentPage -=1;
     this.getUsers();
  }

  onNext() {
     this.currentPage +=1;
     this.getUsers();
  }
  
  getIndexFromArray(arr=[],id) {
      return arr.findIndex(x=>x.id);
  }
}
