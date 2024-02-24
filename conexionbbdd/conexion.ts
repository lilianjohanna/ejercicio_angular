import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponente implements OnInit {
  datos: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    this.dataService.obtenerDatosDeLaBaseDeDatos().subscribe((data: any[]) => {
      this.datos = data;
    });
  }
}
