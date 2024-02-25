import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SelectivoComponent } from './app/selectivo/selectivo.component';
bootstrapApplication(SelectivoComponent, {
  providers: []
});