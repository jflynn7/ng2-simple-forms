import { Component, OnInit } from '@angular/core';
import { FormDefinition, FormElement, UnwrappedForm } from './modules/simple-forms/state/simple-forms.state';
import { SimpleFormBuilder } from './modules/simple-forms/services/simple-forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  simpleUnwrappedForm: UnwrappedForm;
  simpleFormElements: FormElement[] = [
    new FormElement({
      inputId: 'simpleOne',
      type: 'text',
      label: 'Simple One'
    }),
    new FormElement({
      inputId: 'simpleTwo',
      type: 'text',
      label: 'Simple Two'
    }),
    new FormElement({
      inputId: 'simpleThree',
      type: 'text',
      label: 'Simple Three'
    }),
    new FormElement({
      inputId: 'simpleFour',
      type: 'text',
      label: 'Simple Four'
    }),
  ] ;

  simpleWrappedForm: FormDefinition = new FormDefinition({
    formId: 'simpleWrappedForm',
    formTitle: 'Simple Wrapped Form',
    formElements: this.simpleFormElements
  });

  constructor(private simpleFormsService: SimpleFormBuilder) {}

  ngOnInit() {
    this.simpleUnwrappedForm = this.simpleFormsService.toUnwrappedForm(this.simpleFormElements);

    this.simpleWrappedForm.submitEmitter.subscribe(value => {
      console.log('Submitted from simpleWrappedForm', value);
    })
  }

  unwrappedSubmit() {
    console.log('Submitted from simpleUnwrappedForm', this.simpleUnwrappedForm.formGroup.getRawValue());
  }
}
