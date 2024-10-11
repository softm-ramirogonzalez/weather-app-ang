import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{

  @Input() items: any[] = [];  // Lista de objetos a mostrar
  @Input() templateRef!: TemplateRef<any>;



}
