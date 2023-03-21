import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../services/reportes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ubicacionUrl ='https://www.google.cl/maps/place/Av.+Andr%C3%A9s+Bello+720,+Chillan,+Chill%C3%A1n,+B%C3%ADo+B%C3%ADo/@-36.6000179,-72.0794656,16z/data=!3m1!4b1!4m5!3m4!1s0x9668d6214484677d:0x3d79d0f7254275a0!8m2!3d-36.5997642!4d-72.0742218';
  constructor(private api:ReportesService) {
    this.api.addView().subscribe((res:any) =>{})
   }

  ngOnInit(): void {
  }

}
