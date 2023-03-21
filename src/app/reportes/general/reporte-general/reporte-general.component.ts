import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte-general',
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.css']
})
export class ReporteGeneralComponent implements OnInit {

  estados:any={}
  horarios:any={}
  canchas:any={}
  constructor(public api:ReportesService) {

  }

  ngOnInit(){
    this.api.getEstados().subscribe((res:any[])=>{
      this.api.estado = res
      this.estados= res
      console.log(JSON.stringify(res))
    },
    err => console.log(err)
    )

    this.api.getHorarios().subscribe((res:any[])=>{
      this.api.horario = res
      this.horarios=res
      console.log("Horarios: " + JSON.stringify(res))
    },
    err => console.log(err)
    )

    this.api.getCanchas().subscribe((res:any[])=>{
      this.api.cancha = res
      this.canchas = res
      console.log("Canchas"+JSON.stringify(res))
    },
    err => console.log(err)
    )

    this.api.getView().subscribe((res:any)=>{
      this.api.visitas = res
      console.log("Vistas " +this.api.visitas)
    },
    err => console.log(err)
    )

  }

}
