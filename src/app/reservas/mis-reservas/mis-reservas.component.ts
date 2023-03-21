import { Component, OnInit } from '@angular/core';
import { CanchaService } from '../../services/cancha.service';
import { ReservaService } from '../../services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {
  misReservas: any;
  constructor(public reservaService: ReservaService, public usuarioService: UsuarioService,public cookie:CookieService) { }

  ngOnInit(): void {
      let rut=this.cookie.get('usuario');
      console.log(rut);
      //Obtener todas las reservas del usuario
      this.reservaService.getReservasByRut(rut).subscribe((res:any) =>{
        this.reservaService.reservas=res;
        this.misReservas= this.reservaService.reservas;
        console.log(this.misReservas)
      },
      err => console.log(err))
  }

  deleteReserva(id:string, rut:string){
    Swal.fire({
      title: 'Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar Reserva',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reservaService.deleteReservasById(id).subscribe((res:any)=>{

        })
        this.reservaService.getReservasByRut(rut).subscribe((res:any) =>{
          this.reservaService.reservas=res;
          this.misReservas= this.reservaService.reservas;
          console.log(this.misReservas)
          Swal.fire(
            'Eliminada!',
            'Tu reserva ha sido eliminada con éxito.',
            'success'
          )
        },
        err => console.log(err))

      }
    })
   
  }

}
