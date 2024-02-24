import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'conexion-angular';
  datosSelect: any[] = [];
dato: any;
  //obtenerDatosSelect: any;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.obtenerDatosSelect();
  }
  obtenerDatosSelect() {
    this.datosService.obtenerDatosSelect().subscribe(
      response => {
        this.datosSelect = response;
      },
      error => {
        console.error('Error al obtener datos del select: ', error);
      }
    );
  }
}
