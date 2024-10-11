import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutWeatherComponent } from './layouts/layout-weather/layout-weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutWeatherComponent,
    children:[
      {path:'weather-zone', component:WeatherPageComponent},
      {path:'**', redirectTo:'weather-zone'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
