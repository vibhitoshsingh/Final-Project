import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from "@angular/router";

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(private _authenticationService:AuthenticationService, private _router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if(this._authenticationService.checkIfTokenExist()) {
        return true;
    }else {
        this._router.navigate(['/login']);
    }
  }
}
