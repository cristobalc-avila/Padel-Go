import { Component, OnInit } from '@angular/core';
import { IEstado } from '../Interfaz';
import { CanchaService } from '../services/cancha.service';
@Component({
  selector: 'app-habilitar-cancha',
  templateUrl: './habilitar-cancha.component.html',
  styleUrls: ['./habilitar-cancha.component.css']
})
export class HabilitarCanchaComponent implements OnInit {

  constructor(public canchaService:CanchaService) { }

  ngOnInit(): void {
    this.canchaService.getTodasCanchas().subscribe((res:any[]) =>{
      this.canchaService.canchas=res;
      console.log(this.canchaService.canchas);
    },
    err => console.log(err))
  }
  
  habilitarCancha(id:number){
    let salida:IEstado={
      id:id,
      estado:"DISPONIBLE"
    };
    console.log(id);
    this.canchaService.cambiarEstadoCancha(salida).subscribe(() => {
      return this.canchaService.getTodasCanchas().subscribe((res:any[])=>{
        this.canchaService.canchas=res

      },
      err=> console.log(err)
      )
    });
  }
  
  desabilitarCancha(id:number){
    let salida:IEstado={
      id:id,
      estado:"NO DISPONIBLE"
    };
    console.log(id);
    this.canchaService.cambiarEstadoCancha(salida).subscribe(() => {
      return this.canchaService.getTodasCanchas().subscribe((res:any[])=>{
        this.canchaService.canchas=res
      },
      err=> console.log(err)
      )
    });
  }
  
  


  
}
