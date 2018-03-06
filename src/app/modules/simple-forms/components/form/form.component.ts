import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormDetails, FormElement } from '../../simple-forms.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() formTitle: string;
  @Input() formSubtitle: string;
  @Input() form: FormDetails;
  @Input() hideClear: boolean = false;

  @Input() formOptions: FormConfig = {
    wrapperCssClass: '', // Allows you to pass a custom CSS class to apply to the form wrapper container
    formElementCssClass: '', // Allows you to pass a custom CSS class to apply to each form element in the form
    buttonCssClass: '', // Allows you to pass a customer CSS class to apply to each button in the form
    submitButtonLabel: 'Submit', // Allows you to modify the submit button text
    clearButtonLabel: 'Clear' // Allows you to modify the clear button text
  };

  @Input() defaultFormData: any;
  @Output() formData: {};

  @Output() changeEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.form.formGroup.valueChanges.subscribe(data => {
      this.changeEmitter.emit(data);
    });

    this.form.elements = this.form.elements.map((element) => {
      return {
        inputId: element.inputId,
        element: this.setElementConfig(element.element)
      };
    });

    console.log(this.form.elements);

    if (this.defaultFormData) {
      console.log('Setting default form data.', this.defaultFormData);
      this.form.formGroup.setValue(this.defaultFormData);
    }

  }

  setElementConfig(element: FormElement) {
    return element.setConfig('wrapperCssClass', this.formOptions.formElementCssClass);
  }

  submit() {
    this.submitEmitter.emit(this.form.formGroup.getRawValue());
    return;
  }

  clear() {
    this.form.formGroup.reset();
  }

  setConfig(propertyName: string, value: string) {
    this.formOptions[propertyName] = value;
  }

}

export interface FormConfig {
  wrapperCssClass?: string;
  formElementCssClass?: string;
  buttonCssClass?: string;
  submitButtonLabel?: string;
  clearButtonLabel?: string;
}
