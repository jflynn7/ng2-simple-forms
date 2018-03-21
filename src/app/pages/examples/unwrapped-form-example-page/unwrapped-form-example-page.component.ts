import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SimpleFormBuilder as builder } from '../../../modules/simple-forms/builders/simple-forms.builder';
import { FormComponent } from '../../../modules/simple-forms/components/form/form.component';
import { Accessibility, Elements, FormDetails, FormElement, Properties } from '../../../modules/simple-forms/simple-forms.types';
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
    '    builder.createElement(Elements.Text, \'Simple One\'),\n' +
    '\n' +
    '    /// With explicit inputId\n' +
    '    builder.createElement(Elements.Text, \'Simple Two\', { inputId: \'simpleTwoInputId\' }),\n' +
    '\n' +
    '    /// With inline configuration (see Configuration for more info)\n' +
    '    builder.createElement(Elements.Text, \'Simple Three\')\n' +
    '      .setAccessibility(Accessibility.AriaLabel, \'Simple Three Aria Label Set By Config\'),,\n' +
    '\n' +
    '    /// With inline property value (see Setting Properties for more info)\n' +
    '    builder.createElement(Elements.Text, \'Simple Four\')\n' +
    '      .setProperty(Properties.HelpText, \'Here is some helptext!\')\n' +
    '      .setProperty(Properties.Required, true),' +
    '\n  /// ....etc\n' +
    '];';

  createUnwrappedFormCode = 'this.myForm = builder.toFormDetails(this.myFormElements);';
  renderFromInputCode: string = '<app-form-element\n' +
    ' [formGroup]="myForm.formGroup"\n' +
    ' [formElement]="myForm.get(\'simpleOne\')">\n' +
    '</app-form-element>';

  myFormElements: FormElement[] = [

    /// Simple text element (inputId generated from label)
    builder.createElement(Elements.Text, 'Simple One'),

    /// With explicit inputId
    builder.createElement(Elements.Text, 'Simple Two', { inputId: 'simpleTwoInputId' }),

    /// With inline configuration (see Configuration for more info)
    builder.createElement(Elements.Text, 'Simple Three')
      .setAccessibility(Accessibility.AriaLabel, 'Simple Three Aria Label Set By Config'),

    /// With inline property value (see Setting Properties for more info)
    builder.createElement(Elements.Text, 'Simple Four')
      .setProperty(Properties.HelpText, 'Here is some helptext!')
      .setProperty(Properties.Required, true),

    /// Some extras for grouped elements example
    builder.createElement(Elements.Password, 'Simple Five'),
    builder.createElement(Elements.Text, 'Simple Six'),
    builder.createElement(Elements.Text, 'Simple Seven'),

    // Add inline validation
    builder.createElement(Elements.Text, 'Simple Eight')
      .setProperty(Properties.Required, true)
      .setProperty(Properties.MinLength, 8),

    // Create checkbox group and add options.
    builder.createElement(Elements.Checkbox, 'Simple Checkbox Group')
      .setProperty(Properties.Options, [
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
    builder.createElement(Elements.Radio, 'Simple Radio Group')
      .setProperty(Properties.Options, [
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
    builder.createElement(Elements.Select, 'Simple Select Box')
      .setProperty(Properties.Options, [
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
    builder.createElement(Elements.Select, 'Simple Select Box With Option Groups')
      .setProperty(Properties.OptionGroups, [
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
    this.myForm.get('simpleOne').setAccessibility(Accessibility.AriaLabel, 'Simple One Aria Label Set By Config');

  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

  unwrappedSubmit() {
    console.log('Submitted from myForm', this.myForm.formGroup.getRawValue());
  }

}
