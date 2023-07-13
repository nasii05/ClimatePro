import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
// import { weather } from '../models/weather.model';
import { Data, location } from '../models/location.model';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { List } from '../models/forecast.model';
import { DatePipe } from '@angular/common';
// import { allForecast } from '../models/forecast.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  DateToday = new Date();
  input!: string;
  geoData!: Observable<location[]>;
  result!: location;
  current!:any;
  forcast!:List[];
  todaysForcast!:List[];
  weeklyForcast!:List[];
  userSearchUpdate = new Subject<string>();
  visible:boolean = false;
  availableForecast!:number;

  constructor(private http: WeatherService, private DatePipe:DatePipe) {
    // this.http.getweather().subscribe((res)=>{
    //   console.log(res);
    // })

    // this.http.getLocation(this.input).subscribe((res)=>{
    //   console.log(res)
    // })

    this.userSearchUpdate
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((value) => {
        this.searchValues(value);
      });
  }

  searchValues(key: any) {
    this.visible=true
    this.http.getLocation(this.input).subscribe((res) => {
      this.result = res;
      this.result.latitude = res.latitude;
      console.log(this.result);
    });
  }

  getWeatherTs(key: Data) {
    const lat = key.latitude;
    const lon = key.longitude;
    this.http.getweather(lat, lon).subscribe((res) => {
      this.current = res
      console.log(this.current)
    });
    this.getForcastTs(lat, lon);
    this.visible = !this.visible;
    console.log(this.visible, "item gone");
  }

  getForcastTs(lat: number, lon: number) {
    this.http.getForcast(lat, lon).subscribe((res) =>{
    this.todaysForcast =  res.filter((val)=> {
       let dat  = this.DatePipe.transform(val.dt_txt, 'dd/MM/yyyy')
       let formatdate = this.DatePipe.transform(this.DateToday, 'dd/MM/yyyy')

       return dat == formatdate;
     })
     this.availableForecast = this.todaysForcast.length

     this.weeklyForcast = res.filter((val)=>{
       let dat = this.DatePipe.transform(val.dt_txt, 'HH');
       return dat == '12';

     })

     console.log(this.todaysForcast, this.weeklyForcast)
    });
  }

  getLocation() {
    this.http.getLocation(this.input).subscribe((res) => {

      this.result = res;
      console.log(this.result);
    });
  }


}
