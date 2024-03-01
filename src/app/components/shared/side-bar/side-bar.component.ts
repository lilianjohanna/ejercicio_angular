import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-side-bar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './side-bar.component.html'
})
export class SideBarComponent {
    nav = [
    {
        id: 1,
        path: '/dashboard/survey-form',
        label: 'Caracterización migrantes'
    },
    {
        id: 2,
        path: '/dashboard/survey-form-walker',
        label: 'Caracterización caminantes'
    },
    {
        id: 3,
        path: '/dashboard/map',
        label: 'Mapa'
    },
    {
        id: 4,
        path: '/auth/login',
        label: 'Salir'
    }
    ]
}
