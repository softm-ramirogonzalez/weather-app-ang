import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/weather.interface';
import { environments } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url:string  = environments.baseUrl;
  private apiKey   = environments.WEATHER_KEY;
  private http = inject(HttpClient);

  constructor() { }


  getWeather(location:string):Observable<WeatherResponse>{
    return this.http.get<WeatherResponse>(`${this.url}?q=${location}&units=metric&appid=${this.apiKey}`);
  }

}
