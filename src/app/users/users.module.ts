import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    LayoutPageComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
]
})
export class UsersModule { }
