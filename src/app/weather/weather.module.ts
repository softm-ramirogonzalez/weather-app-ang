import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { LayoutWeatherComponent } from './layouts/layout-weather/layout-weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';


@NgModule({
  declarations: [
    LayoutWeatherComponent,
    WeatherCardComponent,
    SearchWeatherComponent,
    WeatherPageComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
