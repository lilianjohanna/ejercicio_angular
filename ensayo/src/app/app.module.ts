import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { SelectivoComponent } from './selectivo/selectivo.component'; // Importa tu componente aquí

@NgModule({
  declarations: [
    SelectivoComponent // Agrega tu componente a la lista de declaraciones
  ],
  imports: [
    BrowserModule
  ],
  providers: []
  bootstrap: [AppComponent]
})
export class AppModule { }
