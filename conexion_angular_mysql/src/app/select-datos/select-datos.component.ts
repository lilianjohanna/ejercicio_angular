import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './select-datos.component.html',
  styleUrls: ['./select-datos.component.css']
})
export class TuComponenteComponent implements OnInit {

  opciones: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarOpciones();
  }

  cargarOpciones() {
    this.http.get<any[]>('http://localhost:3000/select-datos').subscribe(
      data => {
        this.opciones = data;
      },
      error => {
        console.log('Error al cargar opciones desde el servidor', error);
      }
    );
  }

}
