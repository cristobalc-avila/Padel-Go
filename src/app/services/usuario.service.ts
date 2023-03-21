import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public enlace:string="localhost";
  constructor(private http:HttpClient) { }
  public usuario:any={};
  getUsuario(id:string):Observable<IUsuario>{
    return this.http.get<IUsuario>('http://'+this.enlace+':4000/usuario/'+id).pipe(map((res:any) => res.data));

  }  
}
