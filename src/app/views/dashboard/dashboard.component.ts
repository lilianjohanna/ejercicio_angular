import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavTopComponent } from '@shared/component/nav-top/nav-top.component';
import { SideBarComponent } from '@shared/component/side-bar/side-bar.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [RouterOutlet, NavTopComponent, SideBarComponent],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

}
