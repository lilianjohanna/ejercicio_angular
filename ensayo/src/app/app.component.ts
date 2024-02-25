import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectivoComponent } from "./selectivo/selectivo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SelectivoComponent]
})
export class AppComponent {
  title = 'ensayo';
}
