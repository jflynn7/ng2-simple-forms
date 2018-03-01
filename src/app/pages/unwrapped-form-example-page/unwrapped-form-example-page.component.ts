import { Component, OnInit, ViewChild } from '@angular/core';
import { SimpleFormBuilder } from '../../modules/simple-forms/builders/simple-forms.builder';
import { FormComponent } from '../../modules/simple-forms/components/form/form.component';
import { FormDetails, FormElement } from '../../modules/simple-forms/state/simple-forms.state';

@Component({
  selector: 'app-unwrapped-form-example-page',
  templateUrl: './unwrapped-form-example-page.component.html',
  styleUrls: ['./unwrapped-form-example-page.component.scss']
})
export class UnwrappedFormExamplePageComponent implements OnInit {

  @ViewChild('wrappedForm') wrappedForm: FormComponent;

  example: string = `<app-form-element [formGroup]="simpleForm.formGroup" [formElement]="simpleForm.get('simpleRadioGroup')"></app-form-element>`;

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
    SimpleFormBuilder.createElement('password', 'Simple Five'),
    SimpleFormBuilder.createElement('text', 'Simple Six'),
    SimpleFormBuilder.createElement('text', 'Simple Seven'),

    // Add inline validation
    SimpleFormBuilder.createElement('text', 'Simple Eight')
      .setProperty('required', true)
      .setProperty('minLength', 8),

    // Create checkbox group and add options.
    SimpleFormBuilder.createElement('checkbox', 'Simple Checkbox Group')
      .setProperty('options', [
        {
          value: 'test1',
          display: 'Test Checkbox One'
        },
        {
          value: 'test2',
          display: 'Test Checkbox Two'
        },
        {
          value: 'test3',
          display: 'Test Checkbox Three'
        }
      ]),

    // Create radio group and add options.
    SimpleFormBuilder.createElement('radio', 'Simple Radio Group')
      .setProperty('options', [
        {
          value: 'test1',
          display: 'Test Radio One'
        },
        {
          value: 'test2',
          display: 'Test Radio Two'
        },
        {
          value: 'test3',
          display: 'Test Radio Three'
        }
      ]),

    // Create standard select dropdown
    SimpleFormBuilder.createElement('select', 'Simple Select Box')
      .setProperty('options', [
        {
          value: 'test1',
          display: 'Test Checkbox One'
        },
        {
          value: 'test2',
          display: 'Test Checkbox Two'
        },
        {
          value: 'test3',
          display: 'Test Checkbox Three'
        }
      ]),

    // Create standard select dropdown with option groups
    SimpleFormBuilder.createElement('select', 'Simple Select Box With Option Groups')
      .setProperty('optionGroups', [
        {
          groupName: 'Test Group 1',
          options: [
            {
              value: 'test1',
              display: 'Test Checkbox One'
            },
            {
              value: 'test2',
              display: 'Test Checkbox Two'
            },
            {
              value: 'test3',
              display: 'Test Checkbox Three'
            }
          ]
        },
        {
          groupName: 'Test Group 2',
          options: [
            {
              value: 'test4',
              display: 'Test Checkbox Four'
            },
            {
              value: 'test5',
              display: 'Test Checkbox Five'
            },
            {
              value: 'test6',
              display: 'Test Checkbox Six'
            }
          ]
        },
        {
          groupName: 'Test Group 3',
          options: [
            {
              value: 'test7',
              display: 'Test Checkbox Seven'
            },
            {
              value: 'test8',
              display: 'Test Checkbox Eight'
            },
            {
              value: 'test9',
              display: 'Test Checkbox Nine'
            }
          ]
        }
      ])

  ] ;

  singleElement: FormElement = SimpleFormBuilder.createElement('text', 'Single Element');
  singleRadioElement: FormElement = // Create radio group and add options.
    SimpleFormBuilder.createElement('radio', 'Single Radio Group')
      .setProperty('options', [
        {
          value: 'test1',
          display: 'Test Radio One'
        },
        {
          value: 'test2',
          display: 'Test Radio Two'
        },
        {
          value: 'test3',
          display: 'Test Radio Three'
        }
      ]);

  constructor() {}

  ngOnInit() {
    this.simpleForm = SimpleFormBuilder.toUnwrappedForm(this.simpleFormElements);
    /// Set config on existing element
    this.simpleForm.get('simpleOne').setConfig('ariaLabel', 'Simple One Aria Label');
  }


  getSingleElementValue(value: any) {
    console.log('single element value: ', value);
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
