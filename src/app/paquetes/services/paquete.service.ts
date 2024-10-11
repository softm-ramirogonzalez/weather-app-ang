import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Package, Paquetes, Result } from '../interfaces/paquetes.interface';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  private baseUrl:string = 'https://api.npms.io/v2/search?q=scope:angular';

  private http:HttpClient = inject(HttpClient);

  private paquetes:Package[] = [];

  constructor() { }

  getPaquetes():Observable<Package[]>{

    return this.http.get<Paquetes>(`${this.baseUrl}`)
      .pipe(
        map(({results}) => {
          return results.map(result => result.package);
        })
      );
  }

}
