import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl:string = 'https://jsonplaceholder.typicode.com';
  public http:HttpClient = inject(HttpClient);
  constructor() { }

  getUsers():Observable<User[]>{

    return this.http.get<User[]>(`${this.baseUrl}/users`);

  }

}
