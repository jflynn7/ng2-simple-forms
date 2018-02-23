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
  formGroup?: FormGroup;

  constructor(data: { formId: string, formTitle: string, formElements: FormElement[]}) {
    this.formId = data.formId;
    this.formTitle = data.formTitle;
    this.formElements = data.formElements;
    this.submitEmitter = new EventEmitter<any>();
    this.changeEmitter = new EventEmitter<any>();
    this.formGroup = undefined;
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
  options?: FormElementOption[];

  constructor(data: { inputId: string, type: string, label: string, minLength?: number, maxLength?: number,
                      regex?: string, helpText?: string, errorText?: string, options?: FormElementOption[]}) {
    this.inputId = data.inputId;
    this.type = data.type;
    this.label = data.label;
    this.minLength = data.minLength;
    this.maxLength = data.maxLength;
    this.regex = data.regex;
    this.helpText = data.helpText;
    this.errorText = data.errorText;
    this.options = data.options;
  }
}

export class FormElementOption {
  value: string;
  display: string;


  constructor(data: { value: string, display: string }) {
    this.value = data.value;
    this.display = data.display;
  }
}

export class OptionsObject {
  object: any;
  valueKey: string;
  displayKey: string;


  constructor(data: { object: any, valueKey?: string, displayKey?: string }) {
    this.object = data.object;
    this.valueKey = data.valueKey;
    this.displayKey = data.displayKey;
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

