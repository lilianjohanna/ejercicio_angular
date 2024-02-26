import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOptions(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/options'); // Ruta a tu servidor Node.js
  }
}
