import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-datos',
  standalone: true,
  imports: [],
  templateUrl: './select-datos.component.html',
  styleUrl: './select-datos.component.css'
})
export class FormExampleComponent implements OnInit {

  // Array para almacenar los resultados de la consulta a la base de datos
  options: any[] = [];

  // Variable para almacenar el valor seleccionado del select
  selectedOption: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Hacer la solicitud HTTP para obtener datos de la base de datos
    this.http.get<any[]>('http://tu-api.com/obtener-datos-de-la-base-de-datos')
      .subscribe(data => {
        this.options = data; // Asignar los datos obtenidos al array options
      });
  }

  // Método para manejar la selección de una opción en el select
  onSelect(option: any): void {
    this.selectedOption = option;
  }

  // Método para enviar el formulario (puedes agregar más lógica según sea necesario)
  onSubmit(): void {
    console.log('Formulario enviado:', this.selectedOption);
  }
}
