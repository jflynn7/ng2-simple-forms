import { Component, OnInit, ViewChild } from '@angular/core';
import {FormElement, FormDetails, FormElementOption, FormElementOptionGroup} from "./modules/simple-forms/state/simple-forms.state";
import { SimpleFormBuilder } from './modules/simple-forms/builders/simple-forms.builder';
import { FormComponent } from './modules/simple-forms/components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('wrappedForm') wrappedForm: FormComponent;

  unwrapped: boolean = true;
  simpleForm: FormDetails;
  simpleFormElements: FormElement[] = [

    /// Simple text element (inputId generated from label)
    SimpleFormBuilder.createElement('text', 'Simple One'),

    /// With explicit inputId
    SimpleFormBuilder.createElement('text', 'Simple Two', 'simpleTwoInputId'),

    /// With inline configuration
    SimpleFormBuilder.createElement('text', 'Simple Three')
      .setConfig( 'ariaLabel', 'Simple Three Aria Label'),

    /// With inline property value
    SimpleFormBuilder.createElement('text', 'Simple Four')
      .setProperty('helpText', 'Here is some helptext!'),

    /// Some extras for grouped elements example
    SimpleFormBuilder.createElement('text', 'Simple Five'),
    SimpleFormBuilder.createElement('text', 'Simple Six'),
    SimpleFormBuilder.createElement('text', 'Simple Seven'),

    // Add inline validation
    SimpleFormBuilder.createElement('text', 'Simple Eight')
      .setProperty('required', true)
      .setProperty('minLength', 8),

    // Create checkbox group and add options.
    SimpleFormBuilder.createElement('checkbox', 'Simple Checkbox Group')
      .setProperty('options', [
        new FormElementOption({
          value: 'test1',
          display: 'Test Checkbox One'
        }),
        new FormElementOption({
          value: 'test2',
          display: 'Test Checkbox Two'
        }),
        new FormElementOption({
          value: 'test3',
          display: 'Test Checkbox Three'
        })
      ]),

    // Create radio group and add options.
    SimpleFormBuilder.createElement('radio', 'Simple Radio Group')
      .setProperty('options', [
        new FormElementOption({
          value: 'test1',
          display: 'Test Radio One'
        }),
        new FormElementOption({
          value: 'test2',
          display: 'Test Radio Two'
        }),
        new FormElementOption({
          value: 'test3',
          display: 'Test Radio Three'
        })
      ]),

    // Create standard select dropdown
    SimpleFormBuilder.createElement('select', 'Simple Select Box')
      .setProperty('options', [
        new FormElementOption({
          value: 'test1',
          display: 'Test Checkbox One'
        }),
        new FormElementOption({
          value: 'test2',
          display: 'Test Checkbox Two'
        }),
        new FormElementOption({
          value: 'test3',
          display: 'Test Checkbox Three'
        })
      ]),

    // Create standard select dropdown with option groups
    SimpleFormBuilder.createElement('select', 'Simple Select Box With Option Groups')
      .setProperty('optionGroups', [
        new FormElementOptionGroup({
          groupName: 'Test Group 1',
          options: [
            new FormElementOption({
              value: 'test1',
              display: 'Test Checkbox One'
            }),
            new FormElementOption({
              value: 'test2',
              display: 'Test Checkbox Two'
            }),
            new FormElementOption({
              value: 'test3',
              display: 'Test Checkbox Three'
            })
          ]
        }),
        new FormElementOptionGroup({
          groupName: 'Test Group 2',
          options: [
            new FormElementOption({
              value: 'test4',
              display: 'Test Checkbox Four'
            }),
            new FormElementOption({
              value: 'test5',
              display: 'Test Checkbox Five'
            }),
            new FormElementOption({
              value: 'test6',
              display: 'Test Checkbox Six'
            })
          ]
        }),
        new FormElementOptionGroup({
          groupName: 'Test Group 3',
          options: [
            new FormElementOption({
              value: 'test7',
              display: 'Test Checkbox Seven'
            }),
            new FormElementOption({
              value: 'test8',
              display: 'Test Checkbox Eight'
            }),
            new FormElementOption({
              value: 'test9',
              display: 'Test Checkbox Nine'
            })
          ]
        })
      ])

  ] ;

  constructor() {}

  ngOnInit() {
    this.simpleForm = SimpleFormBuilder.toUnwrappedForm(this.simpleFormElements);

    /// Set config on existing element
    this.simpleForm.get('simpleOne').setConfig('ariaLabel', 'Simple One Aria Label');
  }

  unwrappedSubmit() {
    console.log('Submitted from simpleForm', this.simpleForm.formGroup.getRawValue());
  }

  getErrors() {
    const errors: { inputId: string, error: any }[] = [];
    this.simpleFormElements.forEach((element: FormElement) => {
      const error = this.simpleForm.formGroup.controls[element.inputId].errors;
      if (error) {
        errors.push({inputId: element.inputId, error: error });
      }
    });
    return errors;
  }

  toggle() {
    this.unwrapped = !this.unwrapped;
  }

  updateButtonLabel() {
    this.wrappedForm.setConfig('submitButtonLabel', 'Submit the form!');
  }

  updateDemoConfig() {
    this.simpleForm.get('simpleOne').setProperty('required', true);
    this.simpleForm.get('simpleFive').setProperty('required', true);
    this.simpleForm.get('simpleFive').setProperty('minLength', 10);
    this.simpleForm.get('simpleOne').setConfig('requiredMarker', '****');
    this.simpleForm = SimpleFormBuilder.rebuildForm(this.simpleForm);
  }

  addHelpTextToElement(helpText: string, inputId: string) {
    this.simpleForm.get(inputId).setProperty('helpText', helpText);
    this.simpleForm = SimpleFormBuilder.rebuildForm(this.simpleForm);
  }

}
