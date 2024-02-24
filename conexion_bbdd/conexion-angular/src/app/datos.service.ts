import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  obtenerDatosSelect() {
    return this.http.get<any[]>('http://localhost:3000/datos-select');
  }
}
