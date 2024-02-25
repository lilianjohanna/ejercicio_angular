import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormExampleComponent } from './select-datos/select-datos.component';

@NgModule({
  declarations: [
    /*AppComponent,
    FormExampleComponent*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Asegúrate de importar FormsModule si estás utilizando [(ngModel)]
  ],
  providers: []
  //bootstrap: [AppComponent]
})
export class AppModule { }
