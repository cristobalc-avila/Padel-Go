import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IHorario } from '../Interfaz';
import { CanchaService } from '../services/cancha.service';
import { ReservaService } from '../services/reserva.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  today: string;
  constructor(public canchaService:CanchaService, public reservaService:ReservaService, private router:Router,public cookie:CookieService){
    this.today = new Date().toISOString().split('T')[0];
  } 
  
  ngOnInit(): void {
    this.cookie.delete('categoria');
    //Obtener todas las reservas
    this.reservaService.getReservas().subscribe((res:any[]) =>{
      this.reservaService.reservas=res;
    },
    err => console.log(err))

    //Obtener Canchas disponibles y sus reservas del dia de hoy
    this.canchaService.getCanchas().subscribe((res:any[]) =>{
      this.canchaService.canchasDisponible=res;
      this.filtrarPorFecha(this.today);
    },
    err => console.log(err))
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

  
  reservarHora(cancha:number,horario:string,fecha:string){
    const info_cancha={
      cancha:cancha,
      horario:horario,
      fecha:fecha
    }
    this.reservaService.reservar.emit({data:info_cancha});
    this.router.navigate(['reserva-ahora']);
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
