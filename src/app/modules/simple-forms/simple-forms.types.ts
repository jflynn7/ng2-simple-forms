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

// Accessors for element properties (so nobody tries to set erroneous properties that don't exist)
export class Properties {
  static InputId(): string { return 'inputId'; }
  static Required(): string { return 'required'; }
  static MinLength(): string { return 'minLength'; }
  static MaxLength(): string { return 'maxLength'; }
  static Regex(): string { return 'regex'; }
  static HelpText(): string { return 'helpText'; }
  static ErrorText(): string { return 'errorText'; }
  static Options(): string { return 'options'; }
  static OptionGroups(): string { return 'optionGroups'; }
}

// General element config interface
export interface FormElementConfig {
  requiredMarker?: string;
  readOnly?: boolean;
}

// Accessors for general element config (so nobody tries to set erroneous properties that don't exist)
export class Config {
  static RequiredMarker(): string { return 'requiredMarker'; }
  static ReadOnly(): string { return 'readOnly'; }
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
  static AriaLabel(): string { return 'ariaLabel'; }
  static AriaDescribedBy(): string { return 'ariaDescribedBy'; }
  static AriaLabelledBy(): string { return 'ariaLabelledBy'; }
  static AriaReadOnly(): string { return 'ariaReadOnly'; }
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
  static ElementWrapper(): string { return 'wrapperCssClass'; }
  static GroupLabel(): string { return 'groupLabelCssClass'; }
  static ElementLabel(): string { return 'elementLabelCssClass'; }
  static ElementInput(): string { return 'elementInputCssClass'; }
  static Fieldset(): string { return 'fieldsetCssClass'; }
  static Legend(): string { return 'legendCssClass'; }
  static OptionLabel(): string { return 'optionLabelCssClass'; }
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
