import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { GetWeather } from './interfaces/weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public search = this.fb.group({
    inputValue: []
  })

  //title = 'cursoAngular';

  constructor(
    private fb: UntypedFormBuilder,
    private weatherService: WeatherService,
  ){}

  onSubmit(){
    console.log('aaaaaa');
    this.weatherService.getWeather(this.search.value.inputValue).subscribe({
      next: (resp: GetWeather) => {
        console.log(resp);
        console.log('aaaaaaaaaaaa',this.search.value)
      },
      error: (err) => {
        console.log(err)
        console.log('aaaaaaaaaaaa',this.search.value.inputValue)
      }
    })
  }
}
