import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input-select',
    standalone: true,
    imports: [NgClass],
    templateUrl: './input-select.component.html'
})
export class InputSelectComponent {
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() type: string = 'text';
    @Input() index: string = '';
    @Input() ui: 'default' | 'lg' | 'sm' = 'lg';
    @Input() options: any[] = [];
    get sizeLabel() {
        switch(this.ui) {
        case 'lg':
            return 'mb-2 text-[1.1rem] font-semibold';
        default:
            return 'mb-1 text-[.9rem]'
        }
    }
}
