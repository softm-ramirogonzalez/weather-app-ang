import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'user-list',
        component:UserListComponent
      },
      {
        path:'**',
        redirectTo:'user-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
