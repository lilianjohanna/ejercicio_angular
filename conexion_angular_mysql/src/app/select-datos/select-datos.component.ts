import { Component, OnInit } from '@angular/core';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-select-datos',
  templateUrl: './select-datos.component.html',
  styleUrls: ['./select-datos.component.css']
})
export class SelectDatosComponent implements OnInit {
  datos!: any[];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    this.datosService.obtenerDatos()
      .subscribe((datos: any[]) => this.datos = datos);
  }
}
