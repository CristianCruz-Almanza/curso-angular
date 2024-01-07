import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetWeather } from '../interfaces/weather.interface';
import { Forecast } from '../interfaces/forecast.interface';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(location:string){
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=5a4b2d457ecbef9eb2a71e480b947604`;
    return this.http.get<GetWeather>(url);
  }
  getForecasts(zip:string){
    const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=5a4b2d457ecbef9eb2a71e480b947604&cnt=5`;
    return this.http.get<Forecast>(url);
  }
}
