import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input-textarea',
    standalone: true,
    imports: [],
    templateUrl: './input-textarea.component.html'
})
export class InputTextareaComponent {
    @Input() label: string = '';
    @Input() type: string = 'text';
    @Input() index: string = '';
    @Input() row: number = 3;
}
