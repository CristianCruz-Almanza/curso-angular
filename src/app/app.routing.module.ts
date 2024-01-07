import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: 'forecast/:zip', component: ForecastComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SearchComponent, children: [
      // Agrega otras rutas anidadas dentro de AppComponent si es necesario
    ]},
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }