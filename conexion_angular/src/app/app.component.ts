import { Component, OnInit } from '@angular/core';
import { OpcionesService } from './opciones.service';

@Component({
  selector: 'app-root',
  template: `
    <select>
      <option *ngFor="let opcion of opciones" [value]="opcion.id">{{ opcion.nombre }}</option>
    </select>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opciones: any[] = [];

  constructor(private opcionesService: OpcionesService) {}

  ngOnInit() {
    this.obtenerOpciones();
  }

  obtenerOpciones() {
    this.opcionesService.obtenerOpciones().subscribe(
      (data: any[]) => {
        this.opciones = data;
      },
      error => {
        console.error('Error al obtener opciones: ', error);
      }
    );
  }
}
