import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent {

  private weatherService = inject(WeatherService);

  public weatherInfo?:WeatherResponse;

  searchWeather(location:string){
    this.weatherService.getWeather(location)
      .subscribe((weatherResp) => {
        this.weatherInfo = weatherResp;
      })
  }

}
