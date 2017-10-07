import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {HttpClientModule} from '@angular/common/http';
 import { RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RouteGuard} from './shared/guard/route.guard';
import {ApiService} from './shared/services/api.service';
import {AuthenticationService} from './shared/services/authentication.service';

import {appRoutes} from './routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserListingComponent } from './home/user-listing/user-listing.component';
import { AddUserComponent } from './home/add-user/add-user.component';
import { EditUserComponent } from './home/edit-user/edit-user.component';
import { UserSearchPipe } from './shared/pipes/user-search.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    UserListingComponent,
    AddUserComponent,
    EditUserComponent,
    UserSearchPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes
    ),
    FormsModule, HttpClientModule,ReactiveFormsModule,
    LoadingModule,BrowserAnimationsModule
  ],
  providers: [RouteGuard,ApiService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
