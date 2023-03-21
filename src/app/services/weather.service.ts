import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apikey: string = '111482894838be7ff4b3f7cf0f018c5f';
  URI: string = '';


  constructor(private http: HttpClient) {
    this.URI = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?appid=${this.apikey}&lang=es&units=metric&q=`;
  }

  getWeather(city: string, country:string){
    return this.http.get(`${this.URI}${city},${country}`);
  }


}
