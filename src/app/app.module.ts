import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Button, ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ForecastComponent } from './forecast/forecast.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
