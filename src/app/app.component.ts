import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { GetWeather } from './interfaces/weather.interface';
import Swal from 'sweetalert2';
import { LocalStorageService } from './services/local-storage.service';
import { NotificationsService } from './services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

 
  
}
