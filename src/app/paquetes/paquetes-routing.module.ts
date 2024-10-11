import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { PaquetesListComponent } from './components/paquetes-list/paquetes-list.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'paquetes-angular',
        component:PaquetesListComponent
      },
      {
        path:'**',
        redirectTo:'paquetes-angular'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaquetesRoutingModule { }
