import { FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Elements, FormDetails, FormElement, FormElementConfig, FormElementOptions } from '../simple-forms.types';

export class SimpleFormBuilder {

  static formBuilder: FormBuilder = new FormBuilder();

  constructor() {
  }

  /**
   * Get Validators from FormElement definition properties
   */
  static getValidators(element: FormElement): any {
    const validators: ValidatorFn[] = [];
    if (element.required) {
      validators.push(Validators.required);
    }
    if (element.minLength) {
      const minLength = typeof element.minLength === 'number' ? element.minLength : parseInt(element.minLength, 10);
      validators.push(Validators.minLength(minLength));
    }
    if (element.maxLength) {
      const maxLength = typeof element.maxLength === 'number' ? element.maxLength : parseInt(element.maxLength, 10);
      validators.push(Validators.maxLength(maxLength));
    }
    if (element.regex) {
      validators.push(Validators.pattern(element.regex));
    }
    return validators;
  }

  /**
   * Create a FormGroup from a list FormElement definitions
   */
  static toFormGroup(formElements: FormElement[]): any {
    const formGroup: {} = {};
    formElements.forEach((element: FormElement) => {
      if (element.type === Elements.FormArray) {
        const arrayControls: FormElement[] = element.formArrayControls;
        const arrayGroup: {} = {};
        arrayControls.forEach((arrayElement: FormElement) => {
          arrayGroup[arrayElement.inputId] = ['', SimpleFormBuilder.getValidators(arrayElement)];
        });
        formGroup[element.inputId] = new FormArray([SimpleFormBuilder.formBuilder.group(arrayGroup)]);
      } else {
        formGroup[element.inputId] = ['', SimpleFormBuilder.getValidators(element)];
      }
    });
    return SimpleFormBuilder.formBuilder.group(formGroup);
  }

  /**
   * Create a 'FormDetails'
   * Takes a group of FormElements, and returns an
   * Unwrapped form object of formGroup, and
   * { inputId: string, element: FormElement } array.
   */
  static toFormDetails(formElements: FormElement[]): any {
    const unwrappedForm: FormDetails = new FormDetails();
    unwrappedForm.elements = formElements.map(item => ({ inputId: item.inputId, element: item }));
    unwrappedForm.formGroup = SimpleFormBuilder.toFormGroup(formElements);
    return unwrappedForm;
  }


  /**
   * Create a form from JSON
   */
  static fromJson(jsonValue: any) {
    const elements: FormElement[] = jsonValue.map(value => {
      return new FormElement(value);
    });
    return SimpleFormBuilder.toFormDetails(elements);
  }

  /**
   * Simple wrapper to create a FormElement with basic
   * attributes
   */
  static createElement(type: string, label: string, options: FormElementOptions = {}, config?: FormElementConfig) {
    let elementInputId: string;

    if (options && !options.inputId) {
      elementInputId = SimpleFormBuilder.toInputId(label);
    } else {
      elementInputId = options.inputId;
    }
    const element: FormElement = new FormElement({
      inputId: elementInputId,
      type: type,
      label: label,
      config: config
    });

    return SimpleFormBuilder.setOptions(element, options);
  }

  static setOptions(element: FormElement, options: FormElementOptions) {
    Object.getOwnPropertyNames(options).forEach(optionKey => {
      element.setProperty(optionKey, options[optionKey]);
    });

    return element;
  }


  static toInputId(str: string) {
    const words = str.split(' ');
    const mutated: string[] = words.map(function(word, index) {
      // If it is the first word make sure to lowercase all the chars.
      if (index === 0) {
        return word.toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return mutated.join('');
  }

}
