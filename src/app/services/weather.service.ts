import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { location } from '../models/location.model';
import { List, allForecast } from '../models/forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  locationUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?';
  forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
  weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?';
  geoKey = environment.geokey;
  weatherKey = environment.weatherkey;

  lat!: number;
  long!: number;

  getweather(lat: number, lon: number) {
    return this.http.get(this.weatherUrl, {
      params: {
        appid: this.weatherKey,
        units: 'metric',
        lat: lat,
        lon: lon,
      },
    });
  }

  getForcast(lat: number, lon: number):Observable<List[]> {
    return this.http.get<allForecast>(this.forecastUrl, {
      params: {
        appid: this.weatherKey,
        units: 'metric',
        lat: lat,
        lon: lon,
      },
    })
    .pipe(map(res => res.list));
  }

  getLocation(input: string): Observable<location> {
    return this.http.get<location>(this.locationUrl, {
      headers: {
        'X-RapidAPI-Key': this.geoKey,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },

      params: {
        namePrefix: input,
      },
    });
  }
}
