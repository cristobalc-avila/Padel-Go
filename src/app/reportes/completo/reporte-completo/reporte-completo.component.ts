import { Component, OnInit } from '@angular/core';
import { IReserva} from 'src/app/Interfaz';
import * as XLSX from 'xlsx';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte-completo',
  templateUrl: './reporte-completo.component.html',
  styleUrls: ['./reporte-completo.component.css']
})
export class ReporteCompletoComponent implements OnInit {

  desde:string=""
  hasta:string=""
  visible:boolean=false
  reservas:IReserva[]=[];
  constructor(public reporteService:ReportesService) {
    this.desde = new Date().toISOString().split('T')[0];
    this.hasta = new Date().toISOString().split('T')[0];
   }

  ngOnInit(): void {
  }

  comprobar(){
    this.reporteService.obtenerTodasReservas(this.desde,this.hasta).subscribe((res:any[]) =>{
      this.reservas = res;
      this.visible = (this.reservas.length > 0)?true:false;
    },
    err => console.log("error"+err)
    )
    this.visible = true;
  }

  exportar(){
    let element = document.getElementById('export');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, "Reporte total.xlsx");
  }

}
