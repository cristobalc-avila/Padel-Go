import { Injectable } from '@angular/core';
import { ICancha, IEstado} from '../Interfaz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CanchaService {

  uri: string="localhost";
  constructor(private http:HttpClient) {}

  public canchas:ICancha[]=[];

  public canchasDisponible:ICancha[]=[];
  public canchasNoDisponible:ICancha[]=[];

  //Obtiene las Canchas Disponibles
  getCanchas():Observable<ICancha[]>{

    return this.http.get<ICancha[]>('http://localhost:4000/canchasDisp').pipe(map((res:any) => res.data));
  }

  //Obtiene las Canchas Disponibles
  getTodasCanchas():Observable<ICancha[]>{
      return this.http.get<ICancha[]>('http://localhost:4000/canchas').pipe(map((res:any) => res.data));
  }

  //Obtiene las Canchas No Disponibles
  getCanchasNoDisponibles():Observable<ICancha[]>{
    return this.http.get<ICancha[]>('http://'+this.uri+':4000/canchasNoDisp').pipe(map((res:any) => res.data));
  }

  cambiarEstadoCancha(cambioEstado:IEstado){
    return this.http.put<IEstado>('http://'+this.uri+':4000/cancha',cambioEstado);
  }
}
