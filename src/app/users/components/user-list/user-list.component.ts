import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  public userService:UserService = inject(UserService);
  public users:User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }



}
