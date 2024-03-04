import { NgClass } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input-text',
    standalone: true,
    imports: [NgClass, FormsModule],
    templateUrl: './input-text.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputTextComponent),
        multi: true
    }]
})
export class InputTextComponent {
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() type: string = 'text';
    @Input() index: string = '';
    @Input() ui: 'default' | 'lg' | 'sm' = 'lg';
    currentValue: string = '';
    onChange = (_:any)=>{};
    onTouch = () => {};

    writeValue(obj: any): void {
        this.currentValue = obj ? obj : '';
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    changeInput(){
        this.onTouch();
        this.onChange(this.currentValue);
    }
    get sizeLabel() {
        switch(this.ui) {
        case 'lg':
            return 'mb-2 text-[1.1rem] font-semibold';
        default:
            return 'mb-1 text-[.9rem]'
        }
    }
}
