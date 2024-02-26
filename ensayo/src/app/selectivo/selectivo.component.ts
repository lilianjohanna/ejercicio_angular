import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selectivo',
  standalone: true,
  imports: [],
  templateUrl: './selectivo.component.html',
  styleUrl: './selectivo.component.css'
})
export class SelectivoComponent {
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
