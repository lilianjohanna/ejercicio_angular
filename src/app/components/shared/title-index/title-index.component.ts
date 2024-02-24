import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-index',
    standalone: true,
    imports: [],
    templateUrl: './title-index.component.html'
})
export class TitleIndexComponent {
    @Input() label: string = '';
    @Input() index: string = '';

}
