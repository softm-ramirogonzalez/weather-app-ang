import { Component, inject, OnInit } from '@angular/core';
import { PaqueteService } from '../../services/paquete.service';
import { Package, Result } from '../../interfaces/paquetes.interface';

@Component({
  selector: 'app-paquetes-list',
  templateUrl: './paquetes-list.component.html',
  styleUrl: './paquetes-list.component.css'
})
export class PaquetesListComponent implements OnInit{

  public paquetes:Package[] = [];
  private paqueteService:PaqueteService = inject(PaqueteService);

  ngOnInit(): void {
    this.paqueteService.getPaquetes().subscribe((paquetes)=>{
      this.paquetes = paquetes;
      console.log(paquetes);
    })
  }

}
