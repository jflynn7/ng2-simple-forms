import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SimpleFormBuilder as builder } from '../../../modules/simple-forms/builders/simple-forms.builder';
import { FormComponent } from '../../../modules/simple-forms/components/form/form.component';
import { FormDetails, FormElement } from '../../../modules/simple-forms/state/simple-forms.state';
declare var PR: any;

@Component({
  selector: 'app-unwrapped-form-example-page',
  templateUrl: './unwrapped-form-example-page.component.html',
  styleUrls: ['./unwrapped-form-example-page.component.scss']
})
export class UnwrappedFormExamplePageComponent implements OnInit, AfterViewInit {

  @ViewChild('wrappedForm') wrappedForm: FormComponent;

  unwrapped = true;
  myForm: FormDetails;

  createFormElementsArrayCode: string = 'myFormElements: FormElement[] = [\n' +
    '\n' +
    '    /// Simple text element (inputId generated from label)\n' +
    '    builder.createElement(\'text\', \'Simple One\'),\n' +
    '\n' +
    '    /// With explicit inputId\n' +
    '    builder.createElement(\'text\', \'Simple Two\', { inputId: \'simpleTwoInputId\' }),\n' +
    '\n' +
    '    /// With inline configuration (see Configuration for more info)\n' +
    '    builder.createElement(\'text\', \'Simple Three\')\n' +
    '      .setConfig( \'ariaLabel\', \'Simple Three Aria Label\'),\n' +
    '\n' +
    '    /// With inline property value (see Setting Properties for more info)\n' +
    '    builder.createElement(\'text\', \'Simple Four\')\n' +
    '      .setProperty(\'helpText\', \'Here is some helptext!\')\n' +
    '      .setProperty(\'required\', true) ' +
    '\n    /// ....etc\n' +
    '];';

  createUnwrappedFormCode: string = 'this.myForm = builder.toFormDetails(this.myFormElements);';
  renderFromInputCode: string = '<app-form-element\n' +
    ' [formGroup]="myForm.formGroup"\n' +
    ' [formElement]="myForm.get(\'simpleOne\')">\n' +
    '</app-form-element>';

  myFormElements: FormElement[] = [

    /// Simple text element (inputId generated from label)
    builder.createElement('text', 'Simple One'),

    /// With explicit inputId
    builder.createElement('text', 'Simple Two', { inputId: 'simpleTwoInputId' }),

    /// With inline configuration (see Configuration for more info)
    builder.createElement('text', 'Simple Three')
      .setConfig( 'ariaLabel', 'Simple Three Aria Label'),

    /// With inline property value (see Setting Properties for more info)
    builder.createElement('text', 'Simple Four')
      .setProperty('helpText', 'Here is some helptext!')
      .setProperty('required', true),

    /// Some extras for grouped elements example
    builder.createElement('password', 'Simple Five'),
    builder.createElement('text', 'Simple Six'),
    builder.createElement('text', 'Simple Seven'),

    // Add inline validation
    builder.createElement('text', 'Simple Eight')
      .setProperty('required', true)
      .setProperty('minLength', 8),

    // Create checkbox group and add options.
    builder.createElement('checkbox', 'Simple Checkbox Group')
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
    builder.createElement('radio', 'Simple Radio Group')
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
    builder.createElement('select', 'Simple Select Box')
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
    builder.createElement('select', 'Simple Select Box With Option Groups')
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

  constructor() {}

  ngOnInit() {
    this.myForm = builder.toFormDetails(this.myFormElements);
    /// Set config on existing element
    this.myForm.get('simpleOne').setConfig('ariaLabel', 'Simple One Aria Label');

  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

  unwrappedSubmit() {
    console.log('Submitted from myForm', this.myForm.formGroup.getRawValue());
  }

}
