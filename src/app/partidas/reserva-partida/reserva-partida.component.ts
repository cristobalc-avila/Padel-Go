import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CanchaService } from 'src/app/services/cancha.service';
import { PartidaService } from 'src/app/services/partida.service';
import { ReservaService } from 'src/app/services/reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserva-partida',
  templateUrl: './reserva-partida.component.html',
  styleUrls: ['./reserva-partida.component.css']
})
export class ReservaPartidaComponent implements OnInit {

  today: string;
  constructor(public canchaService:CanchaService, public reservaService:ReservaService,private partidaService:PartidaService ,private router:Router,public cookie:CookieService){
    this.today = new Date().toISOString().split('T')[0];
  } 
  
  ngOnInit(): void {
  
    //Obtener todas las reservas
    this.reservaService.getReservas().subscribe((res:any[]) =>{
      this.reservaService.reservas=res;
      console.log(this.reservaService.reservas);
    },
    err => console.log(err))

    //Obtener Canchas disponibles y sus reservas del dia de hoy
    this.canchaService.getCanchas().subscribe((res:any[]) =>{
      this.canchaService.canchasDisponible=res;
      this.filtrarPorFecha(this.today);
      console.log(this.canchaService.canchasDisponible);
    },
    err => console.log(err))
  }
  reservarHora(cancha:number,horario:string,fecha:string){
    let info_cancha={
      cancha:cancha,
      horario:horario,
      fecha:fecha
    }
    console.log(info_cancha);
    this.reservaService.reservar.emit({data:info_cancha});
    this.router.navigate(['reserva-ahora']);
  }
  
  filtrarPorFecha(aux:any) {
    //Primero agregamos los horarios a la fecha correspondiente
    this.limpiarRegistros();
    //Buscamos la reserva correspondiente con la fecha que se entrega por parametros
    for(let i = 0 ; i< this.reservaService.reservas.length ; i++){
      let fecha = new Date(this.reservaService.reservas[i].fecha).toISOString().split('T')[0]
      console.log(fecha);
      if( fecha == aux){
       for(let j = 0 ; j< this.canchaService.canchasDisponible.length ; j++){
         if(this.reservaService.reservas[i].idCancha == this.canchaService.canchasDisponible[j].id){
           for (let k = 0; k < this.canchaService.canchasDisponible[j].horario.length; k++) {
             const horario:string=this.reservaService.reservas[i].horaInicio;
             console.log(horario);
             if (horario==this.canchaService.canchasDisponible[j].horario[k].horario) {
               this.canchaService.canchasDisponible[j].horario[k].estado='RESERVADA'
               break;
             }
             
           }
         }
        }
      }
   } 
  }
  limpiarRegistros(){
    for (let i = 0; i < this.canchaService.canchasDisponible.length;i++) {
      this.canchaService.canchasDisponible[i].horario=[
        {
           'horario':"08:00 AM",
           'estado': ''
        },
        {
          'horario':"09:20 AM",
          'estado': ''
        },
        {
          'horario':'10:40 AM',
          'estado':''
        }, 
        {
          'horario':"12:00 AM",
          'estado':''
        },
        {
          'horario':"01:20 PM",
          'estado':''
        },
        {
          'horario':"02:40 PM",
          'estado':''
        },
        {
          'horario':"04:00 PM",
          'estado':''
        },
        {
          'horario':"05:20 PM",
          'estado':''
        },
        {
          'horario':"06:40 PM",
          'estado':''
        },
        {
          'horario':"08:20 PM",
          'estado':''
        }
      ]
    }
  }

}
