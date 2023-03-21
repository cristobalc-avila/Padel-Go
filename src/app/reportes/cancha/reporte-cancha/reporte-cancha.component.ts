import { Component, OnInit } from '@angular/core';
import { IReserva} from 'src/app/Interfaz';
import * as XLSX from 'xlsx';
import { ReportesService } from 'src/app/services/reportes.service';
@Component({
  selector: 'app-reporte-cancha',
  templateUrl: './reporte-cancha.component.html',
  styleUrls: ['./reporte-cancha.component.css']
})
export class ReporteCanchaComponent  {
  desde: string;
  hasta: string;
  valueCombo: string = '1';
  reservas:IReserva[]=[];
  visible:boolean = false;
  partidasCanceladas:number=0;
  partidasTotales:number=0;
  partidasReservadas:number=0;

  constructor(public reporteService:ReportesService) {
    this.desde = new Date().toISOString().split('T')[0];
    this.hasta = new Date().toISOString().split('T')[0];
    this.reporteService.obtenerListaDeCanchas().subscribe((res:any[]) =>{
      this.reporteService.canchas= res;
    },
    err => console.log(err))
  }

  comprobar(){
    this.reporteService.obtenerReservasPorCanchas(this.valueCombo,this.desde,this.hasta).subscribe((res:any[]) =>{
      this.reservas = res;
      this.partidasTotales=0
      this.partidasCanceladas=0
      this.partidasReservadas=0
      this.reservas.forEach((element,index)=>{
        if(element.estado==="RESERVADA")this.partidasReservadas++
        this.partidasTotales++
        this.partidasCanceladas= this.partidasTotales - this.partidasReservadas
        this.visible=true;
      })
    },
    err => console.log(err))
    this.visible=false;
  }

  exportar(){
    let element = document.getElementById('export');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, "Reporte.xlsx");
  }

}
