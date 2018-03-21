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
  stylesConfig?: FormElementStyleConfig;

  constructor(data: { inputId: string, type: string, label: string, subType?: string, required?: boolean, minLength?: number,
                      maxLength?: number, regex?: string, helpText?: string, errorText?: string, options?: ElementOption[],
                      optionGroups?: ElementOptionGroup[], config?: FormElementConfig, accessibilityConfig?: FormElementAccessibilityConfig,
                      stylesConfig?: FormElementStyleConfig}) {
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
    this.stylesConfig = data.stylesConfig || {};
  }

  setConfig = (property: string, value: any) => {
    this.config[property] = value;
    return this;
  }

  setProperty = (property: string, value: any) => {
    this[property] = value;
    return this;
  }

  setAccessibility = (property: string, value: any) => {
    this.accessibilityConfig[property] = value;
    return this;
  }

  setStyle = (property: string, value: any) => {
    this.stylesConfig[property] = value;
    return this;
  }

  getStyle = (property: string) => {
    return this.stylesConfig[property];
  }

  getAccessibility = (property: string) => {
    return this.accessibilityConfig[property];
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

/**
 * FormDetails object for unwrapped forms
 * @TODO - refer to this as a loose form? Does that make more sense? Who knows! 🙈
 */
export class FormDetails {
  elements: { inputId: string, element: FormElement }[];
  formGroup: FormGroup;

  constructor(data?: { elements: { inputId: string, element: FormElement }[], formGroup: FormGroup }) {
    this.elements = data ? data.elements : [];
    this.formGroup = data ? data.formGroup : undefined;
  }

  // Get an element by its inputId
  get = (inputId: string) => {
    let foundElement: FormElement;
    this.elements.forEach((element: { inputId: string, element: FormElement }) => {
      if (element.inputId === inputId) {
        foundElement = element.element;
      }
    });
    return foundElement;
  }

  // Set config on a particular element by its inputId
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

  // Set style on a particular element by its inputId
  setStyle = (inputId: string, propertyName: string, value: string) => {
    const foundElement = this.get(inputId);
    foundElement.setStyle(propertyName, value);
    this.elements.forEach((element: { inputId: string, element: FormElement }) => {
      if (element.inputId === foundElement.inputId) {
        element.element = foundElement;
      }
    });
    return this;
  }

  // Set accessibility on a particular element by its inputId
  setAccessibility = (inputId: string, propertyName: string, value: string) => {
    const foundElement = this.get(inputId);
    foundElement.setAccessibility(propertyName, value);
    this.elements.forEach((element: { inputId: string, element: FormElement }) => {
      if (element.inputId === foundElement.inputId) {
        element.element = foundElement;
      }
    });
    return this;
  }

}

// Element property options interface
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

export class Elements {
  static Text = 'text';
  static Select = 'select';
  static Checkbox = 'checkbox';
  static Radio = 'radio';
  static Password = 'password';
  static Datepicker = 'datepicker';
  static Range = 'range';
  static Textarea = 'textarea';
  static ObjectSelector = 'object';
}

// Accessors for element properties (so nobody tries to set erroneous properties that don't exist)
export class Properties {
  static InputId = 'inputId';
  static Required = 'required';
  static MinLength = 'minLength';
  static MaxLength = 'maxLength';
  static Regex = 'regex';
  static HelpText = 'helpText';
  static ErrorText = 'errorText';
  static Options = 'options';
  static OptionGroups = 'optionGroups';
}

// General element config interface
export interface FormElementConfig {
  requiredMarker?: string;
  readOnly?: boolean;
  objectDisplayProperty?: string;
}

// Accessors for general element config (so nobody tries to set erroneous properties that don't exist)
export class Config {
  static RequiredMarker = 'requiredMarker';
  static ReadOnly = 'readOnly';
  static ObjectDisplayProperty = 'objectDisplayProperty';
}

// Accessibility config interface
export interface FormElementAccessibilityConfig {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  ariaReadOnly?: boolean;
}

// Accessors for element accessibility (so nobody tries to set erroneous properties that don't exist)
export class Accessibility {
  static AriaLabel = 'ariaLabel';
  static AriaDescribedBy = 'ariaDescribedBy';
  static AriaLabelledBy = 'ariaLabelledBy';
  static AriaReadOnly = 'ariaReadOnly';
}

// Style config interface
export interface FormElementStyleConfig {
  wrapperCssClass?: string;
  groupLabelCssClass?: string;
  elementLabelCssClass?: string;
  elementInputCssClass?: string;
  fieldsetCssClass?: string;
  legendCssClass?: string;
  optionLabelCssClass?: string;
}

// Accessors for element styles (so nobody tries to set erroneous styles that don't exist)
export class Styles {
  static ElementWrapper = 'wrapperCssClass';
  static GroupLabel = 'groupLabelCssClass';
  static ElementLabel = 'elementLabelCssClass';
  static ElementInput = 'elementInputCssClass';
  static Fieldset = 'fieldsetCssClass';
  static Legend = 'legendCssClass';
  static OptionLabel = 'optionLabelCssClass';
}


/// Configuration interface of LabelComponent
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
