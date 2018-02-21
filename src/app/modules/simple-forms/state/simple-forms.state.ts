import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface SimpleFormsState {
  forms: FormDefinition[];
}

export class FormDefinition {
  formId: string;
  formTitle: string;
  formElements: FormElement[];
  submitEmitter?: EventEmitter<any>;
  changeEmitter?: EventEmitter<any>;

  constructor(data: { formId: string, formTitle: string, formElements: FormElement[]}) {
    this.formId = data.formId;
    this.formTitle = data.formTitle;
    this.formElements = data.formElements;
    this.submitEmitter = new EventEmitter<any>(),
    this.changeEmitter = new EventEmitter<any>()
  }
}

export class FormElement {
  inputId: string;
  type: string;
  label: string;
  minLength?: number;
  maxLength?: number;
  regex?: string;
  helpText?: string;
  errorText?: string;


  constructor(data: { inputId: string, type: string, label: string, minLength?: number, maxLength?: number,
                      regex?: string, helpText?: string, errorText?: string}) {
    this.inputId = data.inputId;
    this.type = data.type;
    this.label = data.label;
    this.minLength = data.minLength;
    this.maxLength = data.maxLength;
    this.regex = data.regex;
    this.helpText = data.helpText;
    this.errorText = data.errorText;
  }
}


export class UnwrappedForm {
  elements: { inputId: string, element: FormElement }[];
  formGroup: FormGroup;

  constructor(data?: { elements: { inputId: string, element: FormElement }[], formGroup: FormGroup }){
    this.elements = data ? data.elements : [];
    this.formGroup = data ? data.formGroup : undefined;
  }

  get = (inputId: string) => {
    let foundElement: FormElement = undefined;
    this.elements.forEach((element: { inputId: string, element: FormElement }) => {
      if(element.inputId === inputId) {
        foundElement = element.element;
      }
    });

    return foundElement;
  }

}

