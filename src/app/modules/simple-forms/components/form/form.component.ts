import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormDetails } from '../../state/simple-forms.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() formTitle: string;
  @Input() formSubtitle: string;
  @Input() form: FormDetails;

  @Input() formOptions: FormConfig = {
    wrapperCssClass: '',
    formElementCssClass: '',
    buttonCssClass: '',
    submitButtonLabel: 'Submit',
    clearButtonLabel: 'Clear'
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

    if (this.defaultFormData) {
      console.log('Setting default form data.', this.defaultFormData);
      this.form.formGroup.setValue(this.defaultFormData);
    }

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
