import { Component } from '@angular/core';
import { InputTextComponent } from '@form-controls/component/input-text/input-text.component';
import { InputTextareaComponent } from '@form-controls/component/input-textarea/input-textarea.component';
import { DataForm } from './data-form';
import { InputCheckComponent } from '@form-controls/component/input-check/input-check.component';
import { InputSelectComponent } from '@form-controls/component/input-select/input-select.component';
import { TitleIndexComponent } from '@shared/component/title-index/title-index.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenoresEdad, nameValue } from '@interfaces/survey-form.i';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { InputModalAddressComponent } from '@form-controls/component/input-modal-address/input-modal-address.component';

@Component({
    selector: 'app-survey-form',
    standalone: true,
    imports: [
        InputTextComponent,
        InputSelectComponent,
        TitleIndexComponent,
        ReactiveFormsModule,
        InputModalAddressComponent,
        JsonPipe,
        FormsModule,
        InputTextareaComponent,
        InputCheckComponent
    ],
    templateUrl: './survey-form.component.html'
})
export class SurveyFormComponent {
    DataForm = DataForm;
    modelOptions = { standalone: true };

    menorEdad = {
        edad: new FormControl('', Validators.required),
        am: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required)
    }

    registroForm = this.formBuilder.group({
        codigo: ['', Validators.required],
        fechaEncuesta: ['', Validators.required], /* 1 */
        fechaIngresoPais: ['', Validators.required], /* 1 */
        nombre: ['', Validators.required], /* 2 */
        edad: ['', Validators.required], /* 2.1 */
        sexo: ['', Validators.required], /* 3 */
        embarazo: [false, Validators.required], /* 3.1 */
        gradoEscolar: ['', Validators.required], /* 4 */
        tituloAcademico: ['', Validators.required], /* 4.1 */
        municipioRecidencia: ['', Validators.required], /* 5 */
        direccion: ['', Validators.required], /* 6 */
        telefono: ['', Validators.required], /* 7 */
        tipoDocumento: ['', Validators.required], /* 8 */
        ramv: ['', Validators.required], /* 9 */
        ramvRazon: ['', Validators.required], /* 9.1 */
        situacionActual: ['', Validators.required], /* 10 */
        futuroEsperar: ['', Validators.required], /* 11 */
        proyectoPais: ['', Validators.required], /* 12 */
        conQuienMigra: ['', Validators.required], /* 13 */
        cuntasMigran: ['', Validators.required], /* 14 */
        menoresDeEdad: [[] as MenoresEdad[]], /* 15 */
    })

    constructor(
        private formBuilder: FormBuilder
    ) {}

    submit(){
        console.log(this.registroForm.value)
    }

    getValue(name: nameValue) {
        return this.registroForm.get(name)?.value as any;
    }
    getValueError(name: nameValue) {
        return this.registroForm.get(name)?.errors as any;
    }

    /**
     * agrega en una lista los niños mnores de 14 años (punto: 15) de la encuesta
     */
    addMenor() {
        if(this.getValue && this.menorEdad.edad.valid){
            const group = this.getValue('menoresDeEdad') as MenoresEdad[];
            group.push({
                edad: this.menorEdad.edad.value,
                am: this.menorEdad.am.value,
                sexo: this.menorEdad.sexo.value
            });
            this.registroForm.patchValue({ menoresDeEdad: group })
        }
    }
}
