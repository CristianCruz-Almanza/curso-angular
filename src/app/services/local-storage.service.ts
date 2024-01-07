import { Injectable } from '@angular/core';
import { GetWeather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorageKey = 'data-weather';

  constructor() { }

  getData(): GetWeather[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  saveData(data: GetWeather[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }
}
