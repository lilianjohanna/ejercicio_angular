import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SelectivoComponent } from './selectivo/selectivo.component'; // Importa tu componente aquí
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SelectivoComponent, // Agrega tu componente a la lista de declaraciones
    HttpClientModule
  ],
  imports: [
    BrowserModule
  ],
  providers: []
  bootstrap: [AppComponent]
})
export class AppModule { }
