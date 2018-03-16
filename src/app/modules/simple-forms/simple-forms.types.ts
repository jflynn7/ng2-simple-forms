import { FormGroup } from '@angular/forms';

export class FormElement {
  inputId: string;
  type: string;
  label: string;
  subType?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: string;
  helpText?: string;
  errorText?: string;
  options?: ElementOption[];
  optionGroups?: ElementOptionGroup[];
  config?: FormElementConfig;
  accessibilityConfig?: FormElementAccessibilityConfig;

  constructor(data: { inputId: string, type: string, label: string, subType?: string, required?: boolean, minLength?: number,
                      maxLength?: number, regex?: string, helpText?: string, errorText?: string, options?: ElementOption[],
                      optionGroups?: ElementOptionGroup[], config?: FormElementConfig, accessibilityConfig?: FormElementAccessibilityConfig}) {
    this.inputId = data.inputId;
    this.type = data.type;
    this.subType = data.subType;
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
    this.accessibilityConfig = data.accessibilityConfig || {};
  }

  setConfig = (property: string, value: any) => {
    this.config[property] = value;
    return this;
  }

  setProperty = (property: string, value: any) => {
    this[property] = value;
    return this;
  }

  getTestId = (optionValue?: string) => {
    return optionValue ? `${this.inputId}_${optionValue}_${this.type}` : `${this.inputId}_${this.type}`;
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

  setConfig = (inputId: string, propertyName: string, value: string) => {
    const foundElement = this.get(inputId);
    foundElement.setConfig(propertyName, value);
    this.elements.forEach((element: { inputId: string, element: FormElement }) => {
      if (element.inputId === foundElement.inputId) {
        element.element = foundElement;
      }
    });
    return this;
  }

}

export interface FormElementOptions {
  inputId?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: string;
  helpText?: string;
  errorText?: string;
  options?: ElementOption[];
  optionGroups?: ElementOptionGroup[];
}

export interface FormElementConfig {
  wrapperCssClass?: string;
  groupLabelCssClass?: string;
  inputCss?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  requiredMarker?: string;
  readOnly?: boolean;
}

export interface FormElementAccessibilityConfig {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  ariaReadOnly?: boolean;
}

export interface FormElementStyleConfig {
  wrappedCssClass?: string;
  groupLabelCssClass?: string;
  elementLabelCssClass?: string;
  elementInputCssClass?: string;
  fieldsetCssClass?: string;
  legendCssClass?: string;
}

export interface LabelConfig {
  inputFocussed?: boolean;
  inputHasValue?: boolean;
  requiredMarker?: string;
  modifier?: string;
  elementData: FormElement;
  inputIsValid?: boolean;
  inputIsInvalid?: boolean;
  testId: string;
}
