import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { IUsuario } from '../Usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  public formRegistro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.formRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  registrarse(){
    let usuario:IUsuario={
      nombre:this.formRegistro.value.nombre,
      apellido:this.formRegistro.value.apellido,
      rut:this.formRegistro.value.rut,
      sexo:this.formRegistro.value.sexo,
      correo:this.formRegistro.value.mail,
      clave:this.formRegistro.value.password,
      nivel:2
    }
    this.loginService.saveUser(usuario).subscribe(() => {
      return this.loginService.login(usuario.correo,usuario.clave).subscribe((res:any[])=>{
      },
      err=> console.log(err)
      )
    });
  }
  ngOnInit(): void {}
}