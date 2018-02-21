import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormElement} from '../../../state/simple-forms.state';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['../form-element.base.scss', './password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

    @Input() formGroup: FormGroup;
    @Input() elementData: FormElement;

    constructor() { }

    ngOnInit() {
    }

    isFloating() {
        return this.formGroup.controls[this.elementData.inputId].dirty || this.formGroup.controls[this.elementData.inputId].value;
    }

}
