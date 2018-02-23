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
    SimpleFormBuilder.createElement('text', 'Simple One'),
    SimpleFormBuilder.createElement('text', 'Simple Two'),
    SimpleFormBuilder.createElement('text', 'Simple Three'),
    SimpleFormBuilder.createElement('text', 'Simple Four'),
  ] ;

  simpleWrappedForm: FormDefinition = new FormDefinition({
    formId: 'simpleWrappedForm',
    formTitle: 'Simple Wrapped Form',
    formElements: this.simpleFormElements
  });

  constructor() {}

  ngOnInit() {
    this.simpleUnwrappedForm = SimpleFormBuilder.toUnwrappedForm(this.simpleFormElements);

    this.simpleWrappedForm.submitEmitter.subscribe(value => {
      console.log('Submitted from simpleWrappedForm', value);
    });
  }

  unwrappedSubmit() {
    console.log('Submitted from simpleUnwrappedForm', this.simpleUnwrappedForm.formGroup.getRawValue());
  }
}
