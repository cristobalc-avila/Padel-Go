import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { IReserva } from '../Interfaz';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  @Output() reservar:EventEmitter<any>=new EventEmitter();

  constructor(private http:HttpClient,private router:Router,private cookie:CookieService) { }

  public partidas:IReserva[]=[];
  public info_cancha:any={};
  

  getPartidas(today:string,categoria:string,nivel:string):Observable<IReserva[]>{
    const fecha={fecha:today,categoria:categoria,nivel:nivel}
    return this.http.post<IReserva[]>('http://localhost:4000/partidas',fecha).pipe(map((res:any) => res.data));
  }

  savePartida(){
    let userRerserva={idCancha:this.info_cancha.data.cancha,nivel:this.cookie.get('nivel'),categoria:this.cookie.get('categoria'),jugador1:this.cookie.get('usuario'),fecha:this.info_cancha.data.fecha,horaInicio:this.info_cancha.data.horario,tipo:2};
    return this.http.post<IReserva[]>('http://localhost:4000/reserva',userRerserva).pipe(map((res:any)=>{
      this.router.navigate([''])
    }));
  }
  ingresarJugador(ingresa:string,id:number){
    let jugador={};
    if(ingresa==="jugador2"){
      jugador={jugador2:this.cookie.get('usuario')};
    }else if (ingresa==="jugador3"){
      jugador={jugador3:this.cookie.get('usuario')};
    }else if (ingresa==="jugador4"){
      jugador={jugador4:this.cookie.get('usuario')};
    }
    return this.http.put('http://localhost:4000/ingresarJugador/'+id,jugador);
  }
}
