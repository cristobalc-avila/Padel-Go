import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { IUsuario } from '../Usuario';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri: string="localhost"
  constructor(private http:HttpClient,private router:Router,private cookie:CookieService) { }
  public usuarioLogueado:any={};
  saveUser(Usuario:IUsuario){
    return this.http.post<IUsuario[]>('http://'+this.uri+':4000/usuario',Usuario);
  }
  login(email:string,password:string){
    let userLogin={correo:email,clave:password};
    return this.http.post('http://'+this.uri+':4000/login',userLogin).pipe(map((res:any)=>{
      this.cookie.set('token',res.token);
      this.cookie.set('usuario',res.usuario[0].rut);
      this.cookie.set('rol',res.usuario[0].nivel);
      if(res.usuario[0].nivel===1){
        this.router.navigate(['home-admin']);
      }else{
        this.router.navigate(['']);
      }
      return res;
    }));
  }
  logout(){
    this.cookie.deleteAll();
    this.router.navigate(['']);
  }
  loggedIn():boolean{
    return this.cookie.check('token');
  }
}
