import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('Authenticated')) {
      this.router.navigate(['main']);
      return false;
    }
    return true;
  }
  
}
