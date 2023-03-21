import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoguinGuardGuard implements CanActivate {

  constructor(private router:Router,private loginService:LoginService){}
  
  canActivate(): boolean {
    if(!this.loginService.loggedIn()){
      console.log('No esta logueado');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
