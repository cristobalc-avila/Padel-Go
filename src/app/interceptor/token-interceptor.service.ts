import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private cookieService:CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string=this.cookieService.get('token');
    if(token){
      const newReq=req.clone({setHeaders:{Authorization:`Bearer ${token}`}})
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
