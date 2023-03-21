import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  igUrl = 'https://www.instagram.com/padel.go.cli/';
  fbUrl = 'https://www.facebook.com/profile.php?id=100081119263839';
  waUrl = 'https://wa.me/+56965500660';

  constructor(public loginService:LoginService,public usuarioService:UsuarioService,private cookie:CookieService) { }
  correo:string='';

  ngOnInit(): void {
    let id=this.cookie.get('usuario');
    this.usuarioService.getUsuario(id).subscribe((res:any) =>{
      this.usuarioService.usuario=res;
      console.log(this.usuarioService.usuario)
    },
      (err: any) => console.log(err))
  }

  logOut(){
    this.loginService.logout();
  }


}
