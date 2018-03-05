import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SimpleFormBuilder as builder } from '../../../modules/simple-forms/builders/simple-forms.builder';
import { ComponentValue, FormElement } from '../../../modules/simple-forms/state/simple-forms.state';
declare var PR: any;

@Component({
  selector: 'app-rendering-elements-page',
  templateUrl: './rendering-elements-page.component.html',
  styleUrls: ['./rendering-elements-page.component.scss']
})
export class RenderingElementsPageComponent implements OnInit, AfterViewInit {

  simpleElementCode = '<app-form-element [formGroup]="formGroup" [formElement]="firstName"></app-form-element>';
  loopCode = '<app-form-element *ngFor="let element of myElements" [formGroup]="formGroup" [formElement]="element"></app-form-element>';
  noFormGroupExample = '<app-text-input (changeEmitter)="myFunction($event)" [elementData]="formElement"></app-text-input>';
  singleFunctionDef = 'getSingleElementValue(value: ComponentValue) {\n' +
    '    switch (value.inputId) {\n' +
    '      case \'singleElement\' : this.singleElementValue = value;\n' +
    '      break;\n' +
    '      case \'singleRadioGroup\' :  this.singleRadioElementValue = value;\n' +
    '      break;\n' +
    '    }\n' +
    '  }';

  singleElement: FormElement = builder.createElement('text', 'Single Element');
  singleRadioElement: FormElement = // Create radio group and add options.
    builder.createElement('radio', 'Single Radio Group')
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

  singleElementValue: ComponentValue = new ComponentValue({ inputId: '', value: '', isValid: false});
  singleRadioElementValue: ComponentValue = new ComponentValue({ inputId: '', value: '', isValid: false});

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

  getSingleElementValue(value: ComponentValue) {
    switch (value.inputId) {
      case 'singleElement' : this.singleElementValue = value;
      break;
      case 'singleRadioGroup' :  this.singleRadioElementValue = value;
      break;
    }
  }

}
