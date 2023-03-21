import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  igUrl = 'https://www.instagram.com/padel.go.cli/';
  fbUrl = 'https://www.facebook.com/profile.php?id=100081119263839';
  waUrl = 'https://wa.me/+56965500660';
  constructor(public loginService:LoginService,public usuarioService:UsuarioService,private cookie:CookieService) {

    let id=this.cookie.get('usuario');
    this.usuarioService.getUsuario(id).subscribe((res:any) =>{
      this.usuarioService.usuario=res;


    },
      (err: any) =>{
        console.log(err)
      })
   }
  correo:string='';

  ngOnInit(): void {
    let id=this.cookie.get('usuario');
    this.usuarioService.getUsuario(id).subscribe((res:any) =>{
      this.usuarioService.usuario=res;
      console.log(this.usuarioService.usuario)
    },
      (err: any) =>{
       console.log(err)
      })
  }

  logOut(){
    this.loginService.logout();

  }



}
