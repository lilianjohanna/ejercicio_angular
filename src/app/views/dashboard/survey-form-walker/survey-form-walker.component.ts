import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCheckComponent } from '@form-controls/component/input-check/input-check.component';
import { InputSelectComponent } from '@form-controls/component/input-select/input-select.component';
import { InputTextComponent } from '@form-controls/component/input-text/input-text.component';
import { InputTextareaComponent } from '@form-controls/component/input-textarea/input-textarea.component';
import { TitleIndexComponent } from '@shared/component/title-index/title-index.component';
import { DataForm } from '../survey-form/data-form';
import { InputModalAddressComponent } from '@form-controls/component/input-modal-address/input-modal-address.component';

@Component({
  selector: 'app-survey-form-walker',
  standalone: true,
  imports: [
        InputTextComponent,
        InputSelectComponent,
        TitleIndexComponent,
        ReactiveFormsModule,
        JsonPipe,
        FormsModule,
        InputModalAddressComponent,
        InputTextareaComponent,
        InputCheckComponent
    ],
  templateUrl: './survey-form-walker.component.html'
})
export class SurveyFormWalkerComponent {
    DataForm = DataForm;
}
