import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormDefinition } from '../../state/simple-forms.state';
import { SimpleFormBuilder } from '../../services/simple-forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() form: FormDefinition;
  @Input() buttonLabel: string;
  @Input() buttonSize: string;
  @Input() defaultFormData: any;
  @Output() formData: {};

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = SimpleFormBuilder.toFormGroup(this.form.formElements);
    this.formGroup.valueChanges.subscribe(data => {
      this.form.changeEmitter.emit(data);
    });

    if (this.defaultFormData) {
      console.log('Setting default form data.', this.defaultFormData);
      this.formGroup.setValue(this.defaultFormData);
    }
  }

  submit() {
    this.form.submitEmitter.emit(this.formGroup.getRawValue());
  }

  clear() {
    this.formGroup.reset();
  }



}
