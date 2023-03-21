import { Time } from "@angular/common"
import { Timestamp } from "rxjs"

export interface ICancha{
    id:number,
    nombre:string,
    estado:string,
    horario:IHorario[]
}
export interface IEstado{
    id:number,
    estado:string
}

export interface IHorario{
    horario:string,
    estado:string
}

export interface IReserva{
    id: number,
    idCancha:number,
    nivel:number,
    categoria:string,
    jugador1:string,
    jugador2:string,
    jugador3:string,
    jugador4:string,
    fecha:string,
    horaInicio:string,
    estado:string,
    tipo:string
}
export interface Tupla {
  cancha:number,
  cantidad:number
}



