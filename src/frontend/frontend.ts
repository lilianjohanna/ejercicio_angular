import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: './app/app.component.ts',
  templateUrl: '../backend/backend.js',
  styleUrls: ['../styles.css']
})
export class TuComponenteComponent implements OnInit {

  datosSelect: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerDatosSelect();
  }

  obtenerDatosSelect() {
    this.http.get<any[]>('http://localhost:3000/datos-select').subscribe(
      response => {
        this.datosSelect = response;
      },
      error => {
        console.error('Error al obtener datos del select: ', error);
      }
    );
  }

}
