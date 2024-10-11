import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'weather-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrl: './search-weather.component.css'
})
export class SearchWeatherComponent {

  @Output()
  public weatherOutput:EventEmitter<string> = new EventEmitter<string>();

  getWeatherInfo(location:string){
    if(location.trim().length > 0){
      this.weatherOutput.emit(location.trim());
    }
    return;
  }

}
