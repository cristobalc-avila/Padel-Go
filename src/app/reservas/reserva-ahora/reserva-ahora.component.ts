import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { PartidaService } from 'src/app/services/partida.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reserva-ahora',
  templateUrl: './reserva-ahora.component.html',
  styleUrls: ['./reserva-ahora.component.css']
})
export class ReservaAhoraComponent implements OnInit {
  constructor(public reservaService:ReservaService,private router:Router,private http:HttpClient,public cookie:CookieService,private partidaService:PartidaService) {
  }
  ngOnInit(): void {
    this.reservaService.reservar.subscribe(data=>{
      this.reservaService.info_cancha=data;
      this.partidaService.info_cancha=data;
    })
    console.log(this.cookie.check('categoria'));
  }
  
  reservarAhora(){
    if(this.cookie.check('categoria')){
      this.partidaService.savePartida()
      .subscribe((res:any)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Su partida a sido creada'
        })
      },err=>console.log(err))
    }else{
      this.reservaService.saveReserva()
      .subscribe((res:any)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Su reservada a sido exitosa'
        })
      },err=>console.log(err))
    }
  }


}
