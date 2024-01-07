import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Forecast, List } from '../interfaces/forecast.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  zip: string = '';
  public forecastDataList: List[] = [];

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.zip = params['zip'];
      console.log('Zip:', this.zip); 
    });

    console.log('data entrante---->', this.zip)
    this.getForecast();
  }

  getForecast() {
    this.weatherService.getForecasts(this.zip).subscribe({
      next: (resp: Forecast) => {
        this.forecastDataList = resp.list;
        console.log(resp);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  redirigirAPaginaPrincipal(): void {
    this.router.navigate(['/home']);
  }
}
