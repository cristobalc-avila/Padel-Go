import { EventEmitter, Injectable, Output } from '@angular/core';
import { IReserva} from '../Interfaz';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  @Output() reservar:EventEmitter<any>=new EventEmitter();

  constructor(private http:HttpClient,private router:Router,private cookie:CookieService) { }

  public reservas:IReserva[]=[];
  public info_cancha:any={};
  

  getReservas():Observable<IReserva[]>{
    return this.http.get<IReserva[]>('http://localhost:4000/reservas').pipe(map((res:any) => res.data));
  }

  saveReserva(){
    let userRerserva={idCancha:this.info_cancha.data.cancha,nivel:0,categoria:'SIN CATEGORIA',jugador1:this.cookie.get('usuario'),fecha:this.info_cancha.data.fecha,horaInicio:this.info_cancha.data.horario,tipo:1};
    return this.http.post<IReserva[]>('http://localhost:4000/reserva',userRerserva).pipe(map((res:any)=>{
      this.router.navigate(['']);
    }));
  }
  getReservasByRut(rut:string):Observable<IReserva[]>{
    return this.http.get<IReserva[]>('http://localhost:4000/reserva/'+rut).pipe(map((res:any) => res.data));
  }

  deleteReservasById(id:string){
    return this.http.delete<IReserva[]>('http://localhost:4000/reserva/'+id).pipe(map((res:any) => res.data));
  }

}