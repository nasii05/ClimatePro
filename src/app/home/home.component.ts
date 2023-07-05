import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http:WeatherService){
    this.http.getweather().subscribe((res)=>{
      console.log(res);
    })

    this.http.getLocation('kozhikode').subscribe((res)=>{
      console.log(res)
    })
  }
}
