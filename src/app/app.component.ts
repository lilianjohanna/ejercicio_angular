import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterialEjemplo';
  departamentotext: string[] = ["ALICANTE","ALCOY","S. P. ALCOY","SES VALENCIA","TORREVIEJA","VINAROZ","XATIVA"]
  Items:  string[];
  autoFilter: Observable<string[]>;
  formControl = new FormControl();
  comando = '"styles": [\n' +
    '        "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",\n' +
    '}'

  info: string ;
  mostrarInfo: boolean;

  constructor() {
    this.mostrarInfo = false;
    this.info = '';
    this.Items = this.departamentotext
    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );
  }
  private mat_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Items.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mostrarInfo = true

  }
}
