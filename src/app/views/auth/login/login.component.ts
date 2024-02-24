import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputTextComponent } from '@form-controls/component/input-text/input-text.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [InputTextComponent, RouterLink],
    templateUrl: './login.component.html'
})
export class LoginComponent {

}
