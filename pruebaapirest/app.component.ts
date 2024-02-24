import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectOptions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchSelectOptions();
  }

  fetchSelectOptions() {
    this.http.get<any[]>('http://tu-api-restful.com/select-options').subscribe(
      (data) => {
        this.selectOptions = data;
      },
      (error) => {
        console.error('Error al obtener opciones para el select', error);
      }
    );
  }
}
