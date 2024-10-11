import { Component, Input } from '@angular/core';
import { WeatherResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {

  @Input()
  public weatherInfo!:WeatherResponse;


}
