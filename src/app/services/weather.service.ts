import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  locationUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?";
  forecastUrl ="http://api.openweathermap.org/data/2.5/forecast?";
  weatherUrl ="http://api.openweathermap.org/data/2.5/forecast?";
  geoKey = environment.geokey;
  weatherKey = environment.weatherkey;

  getweather(){
   return this.http.get(this.weatherUrl, {
      params: {
        appid: this.weatherKey,
        units: 'metric',
        lat: 11.234,
        lon: 75.439
      }
    })
  }

  getLocation(input: string):Observable<location>{
    return this.http.get<location>(this.locationUrl, {
      headers: {
        'X-RapidAPI-Key': this.geoKey,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },

      params: {
        namePrefix: 'kozhikode'
      }
    })
  }



}
