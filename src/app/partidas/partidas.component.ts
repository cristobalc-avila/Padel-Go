import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { PartidaService } from '../services/partida.service';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {
  today: string;
  categoria:string;
  nivel:string;
  usuario:string;
  constructor(public partidaService:PartidaService,public cookie:CookieService,private router:Router) {
    this.today = new Date().toISOString().split('T')[0];
    this.categoria='mixto';
    this.nivel='6';
    this.usuario=this.cookie.get('usuario');
  }
  
  ngOnInit(): void {
    console.log(this.today)
    this.partidaService.getPartidas(this.today,this.categoria,this.nivel).subscribe((res:any[]) =>{
      this.partidaService.partidas=res;
      console.log(this.partidaService.partidas);
    },
    err => console.log(err))
  }
  filtrarPorFecha(today:string){
    console.log(today)
    this.partidaService.getPartidas(today,this.categoria,this.nivel).subscribe((res:any[]) =>{
      this.partidaService.partidas=res;
      console.log(this.partidaService.partidas);
    },
    err => console.log(err))
  }
  buscarJugador(jugador2:string,jugador3:string,jugador4:string,id:number){
    if(jugador2===null){
      this.partidaService.ingresarJugador("jugador2",id).subscribe(() => {
        this.router.navigate(['']);
      });
    }else if (jugador3===null){
      this.partidaService.ingresarJugador("jugador3",id).subscribe(() => {
        this.router.navigate(['']);
      });
    }else if (jugador4===null){
      this.partidaService.ingresarJugador("jugador4",id).subscribe(() => {
        this.router.navigate(['']);
      });
    }
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
      title: 'Ha ingresado a la partida!'
    })
  }
}
