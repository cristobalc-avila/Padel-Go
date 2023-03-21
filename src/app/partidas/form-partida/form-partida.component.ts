import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-form-partida',
  templateUrl: './form-partida.component.html',
  styleUrls: ['./form-partida.component.css']
})
export class FormPartidaComponent implements OnInit {
  
  categoria:string;
  nivel:string;

  constructor(private router:Router,private cookie:CookieService) { 
    this.categoria='mixto';
    this.nivel='6';
  }

  ngOnInit(): void {
  }
  
  reservarPartida(){
    this.cookie.set('categoria',this.categoria);
    this.cookie.set('nivel',this.nivel);
  }

}
