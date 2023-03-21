import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICancha,Tupla} from '../Interfaz';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  uri: string="localhost";
  public canchas:ICancha[]=[];
  public estado:any[]=[];
  public cancha:Tupla[]=[];
  public horario:any[]=[];
  public visitas:string=""
  constructor(private http:HttpClient) {
   }

  obtenerListaDeCanchas():Observable<ICancha[]>{
    return this.http.get<ICancha[]>('http://'+this.uri+':4000/getCanchas').pipe(map((res:any) => res.data));
  }
  obtenerReservasPorCanchas(id:string, i:string,t:string){
    let body={id:id,inicio:i,termino:t};
    return this.http.post('http://'+this.uri+':4000/getReportePorCancha',body).pipe(map((res:any) => res.data));
  }
  obtenerTodasReservas(i:string,t:string){
    let body={inicio:i,termino:t};
    return this.http.post('http://'+this.uri+':4000/getReservas',body).pipe(map((res:any) => res.data));
  }
  addView():Observable<string>{
    return this.http.get<string>('http://'+this.uri+':4000/view').pipe(map((res:any) => res.data))
  }
  getView():Observable<string>{
    return this.http.get<string>('http://'+this.uri+':4000/getview').pipe(map((res:any) => res.data))
  }

  getHorarios():Observable<any[]>{
    return this.http.get<any[]>('http://'+this.uri+':4000/horariosMasIncurridos').pipe(map((res:any) => res.data))
  }
  getCanchas():Observable<Tupla[]>{
    return this.http.get<Tupla[]>('http://'+this.uri+':4000/canchasUtilizadas').pipe(map((res:any) => res.data))
  }

  getEstados():Observable<any[]>{
    return this.http.get<any[]>('http://'+this.uri+':4000/estados').pipe(map((res:any) => res.data))
  }

}


