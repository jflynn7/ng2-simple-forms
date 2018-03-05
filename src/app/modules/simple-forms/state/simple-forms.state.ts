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
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: string;
  helpText?: string;
  errorText?: string;
  options?: ElementOption[];
  optionGroups?: ElementOptionGroup[];
  config?: FormElementConfig;

  constructor(data: { inputId: string, type: string, label: string, required?: boolean, minLength?: number, maxLength?: number,
                      regex?: string, helpText?: string, errorText?: string, options?: ElementOption[],
                      optionGroups?: ElementOptionGroup[], config?: FormElementConfig}) {
    this.inputId = data.inputId;
    this.type = data.type;
    this.label = data.label;
    this.required = data.required;
    this.minLength = data.minLength;
    this.maxLength = data.maxLength;
    this.regex = data.regex;
    this.helpText = data.helpText;
    this.errorText = data.errorText;
    this.options = data.options;
    this.optionGroups = data.optionGroups;
    this.config = data.config || {};
  }

  setConfig = (property: string, value: any) => {
    this.config[property] = value;
    return this;
  }

  setProperty = (property: string, value: any) => {
    this[property] = value;
    return this;
  }

  getTestId = (type: string, optionValue?: string) => {
    return optionValue ? `${this.inputId}_${optionValue}_${type}` : `${this.inputId}_${type}`;
  }

}

export class ComponentValue {
  inputId: string;
  value: any;
  isValid: boolean;


  constructor(data: { inputId: string, value: any, isValid: boolean }) {
    this.inputId = data.inputId;
    this.value = data.value;
    this.isValid = data.isValid;
  }
}

export class FormElementOptions {
  inputId?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: string;
  helpText?: string;
  errorText?: string;
  options?: ElementOption[];
  optionGroups?: ElementOptionGroup[];


  constructor(data: { inputId: string, required: boolean, minLength: number, maxLength: number, regex: string, helpText: string,
                      errorText: string, options: ElementOption[], optionGroups: ElementOptionGroup[] }) {
    this.inputId = data.inputId;
    this.required = data.required;
    this.minLength = data.minLength;
    this.maxLength = data.maxLength;
    this.regex = data.regex;
    this.helpText = data.helpText;
    this.errorText = data.errorText;
    this.options = data.options;
    this.optionGroups = data.optionGroups;
  }
}

export class ElementOption {
  value: string;
  display: string;


  constructor(data: { value: string, display: string }) {
    this.value = data.value;
    this.display = data.display;
  }
}

export class ElementOptionGroup {
  groupName: string;
  options: ElementOption[];


  constructor(data: { groupName: string, options: ElementOption[] }) {
    this.groupName = data.groupName;
    this.options = data.options;
  }

}


export class FormDetails {
  elements: { inputId: string, element: FormElement }[];
  formGroup: FormGroup;

  constructor(data?: { elements: { inputId: string, element: FormElement }[], formGroup: FormGroup }) {
    this.elements = data ? data.elements : [];
    this.formGroup = data ? data.formGroup : undefined;
  }

  get = (inputId: string) => {
    let foundElement: FormElement;
    this.elements.forEach((element: { inputId: string, element: FormElement }) => {
      if (element.inputId === inputId) {
        foundElement = element.element;
      }
    });
    return foundElement;
  }

}

export interface FormElementConfig {
  wrapperCssClass?: string;
  validCssClass?: string;
  invalidCssClass?: string;
  focusCssClass?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  requiredMarker?: string;
}
