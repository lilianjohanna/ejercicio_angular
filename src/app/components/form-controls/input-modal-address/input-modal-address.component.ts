import { Component } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputSelectComponent } from '../input-select/input-select.component';

@Component({
    selector: 'app-input-modal-address',
    standalone: true,
    imports: [
        InputTextComponent,
        InputSelectComponent
    ],
    templateUrl: './input-modal-address.component.html'
})
export class InputModalAddressComponent {
    options = [
    {
        value: '1',
        label: 'Calle'
    },
    {
        value: '2',
        label: 'Carrera'
    },
    {
        value: '3',
        label: 'Avenida'
    },
    {
        value: '4',
        label: 'N° Casa'
    }
    ]
}
