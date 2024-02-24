import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { generator } from '@helpers/generator';

@Component({
    selector: 'app-input-check',
    standalone: true,
    imports: [],
    templateUrl: './input-check.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputCheckComponent),
        multi: true
    }]
})
export class InputCheckComponent {
    @Input() label: string = '';
    @Input() type: 'radio' | 'checkbox' = 'radio';
    @Input() index: string = '';
    @Input() ui: 'default' | 'lg' = 'lg';
    @Input() options: any[] = [];
    currentValue: number | string = '';

    id = generator.uuid('check');

    writeValue(obj: any): void {
        this.currentValue = obj ? obj : '';
    }
    onChange = (_:any)=>{};
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    onTouch = () => {};
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    changeInput(option: any){
        this.currentValue = option.value;
        this.onTouch();
        this.onChange(this.currentValue);
    }
}
