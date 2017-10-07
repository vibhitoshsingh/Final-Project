import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserListingComponent } from './home/user-listing/user-listing.component';
import { AddUserComponent } from './home/add-user/add-user.component';
import { EditUserComponent } from './home/edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {RouteGuard} from './shared/guard/route.guard';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent,canActivate: [RouteGuard]},
  { path: 'home',component: HomeComponent,canActivate: [RouteGuard],
               children:[
                 {path:'',component:UserListingComponent},
                 {path:'userlisting',component:UserListingComponent},
                 {path:'addUser',component:AddUserComponent},
                 {path:'editUser/:id',component:EditUserComponent}
               ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent }
  
];