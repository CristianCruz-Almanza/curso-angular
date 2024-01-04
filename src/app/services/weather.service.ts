import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetWeather } from '../interfaces/weather.interface';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // https://api.openweathermap.org/data/2.5/weather?q=United States&appid=5a4b2d457ecbef9eb2a71e480b947604

  constructor(
    private http: HttpClient
  ) { }

  getWeather(location:string){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5a4b2d457ecbef9eb2a71e480b947604`;
    return this.http.get<GetWeather>(url);
  }
}
