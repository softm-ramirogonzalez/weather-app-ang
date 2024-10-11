import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaquetesRoutingModule } from './paquetes-routing.module';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { PaquetesListComponent } from './components/paquetes-list/paquetes-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    PaquetesListComponent
  ],
  imports: [
    CommonModule,
    PaquetesRoutingModule,
    SharedModule
  ]
})
export class PaquetesModule { }
