import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ubicacionUrl ='https://www.google.cl/maps/place/Pje.+Anibal+Pinto+180,+Diguillin,+Chill%C3%A1n+3790817,+%C3%91uble/@-36.6254891,-72.0939724,17z/data=!4m5!3m4!1s0x966929cb1cf9d2eb:0x69324870f29eba04!8m2!3d-36.625205!4d-72.09217';
  weather: any={};

  constructor(private weatherService: WeatherService){ }

  ngOnInit(){
    this.weatherService.getWeather('chillan', 'CL')
    .subscribe( res => {
                        console.log(res);
                        this.weather = res;

                      },
                err => console.log("Falla"+err)
    )
  }
}
