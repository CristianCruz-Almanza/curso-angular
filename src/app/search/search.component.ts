import { Component, OnInit } from '@angular/core';
import { GetWeather } from '../interfaces/weather.interface';
import { UntypedFormBuilder } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { LocalStorageService } from '../services/local-storage.service';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageTemporalService } from '../services/storage-temporal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  public search = this.fb.group({
    inputValue: []
  })

  public weatherDataList: GetWeather[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private weatherService: WeatherService,
    private localStorage: LocalStorageService,
    private notifications:NotificationsService,
    private router: Router,
    private temporalStorage: StorageTemporalService
  ){}

  loadWeatherData() {
    this.weatherDataList = this.localStorage.getData();
  }

  ngOnInit() {
    this.loadWeatherData();
  }


  onSubmit(){
    this.weatherService.getWeather(this.search.value.inputValue).subscribe({
      next: (resp: GetWeather) => {
        console.log(resp);
        const codigoPostal = this.search.value.inputValue;
      resp.codigoPostal = codigoPostal;
        const currentData = this.localStorage.getData();
        currentData.push(resp);
        this.localStorage.saveData(currentData);
        this.notifications.notifications("Se agrego el codigo del pais","success")
        this.loadWeatherData();
        console.log('Data saved:', currentData);
      },
      error: (err) => {
        console.log(err);
        Swal.fire({ title: 'Error', text: 'Pais no encontrado o mal ingresado', icon: 'error',
            showClass: { popup: 'animated animate fadeInDown' },
        })
      }
    })
  }
  deleteWeatherData(index: number) {
    const currentData = this.localStorage.getData();
    currentData.splice(index, 1);
    this.localStorage.saveData(currentData);
    this.loadWeatherData();
    this.notifications.notifications("Se elimino el codigo del pais","success")
  }
  navigateToForecast(zip: string) {
    this.router.navigate(['/forecast', zip]);
    this.temporalStorage.inputValue = zip;

  }
}
