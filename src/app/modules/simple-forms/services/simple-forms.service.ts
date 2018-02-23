import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { FormElement, FormElementOption, OptionsObject, UnwrappedForm } from '../state/simple-forms.state';

export class SimpleFormBuilder {

  static formBuilder: FormBuilder = new FormBuilder();

  constructor() {
  }

  static getValidators(element): any {
    const validators: ValidatorFn[] = [];
    if (element.minLength) {
      validators.push(Validators.minLength(element.minLength));
    }
    if (element.maxLength) {
      validators.push(Validators.maxLength(element.maxLength));
    }
    if (element.regex) {
      validators.push(Validators.pattern(element.regex));
    }
    return validators;
  }

  static toFormGroup(formElements: FormElement[]): any {
    const formGroup: {} = {};
    formElements.forEach((element: FormElement) => {
      formGroup[element.inputId] = ['', SimpleFormBuilder.getValidators(element)];
    });
    return SimpleFormBuilder.formBuilder.group(formGroup);
  }

  static toUnwrappedForm(formElements: FormElement[]): any {
    let unwrappedForm: UnwrappedForm = new UnwrappedForm();
    formElements.forEach((element: FormElement) => {
      unwrappedForm.elements.push({
        inputId: element.inputId,
        element: element
      })
    });
    unwrappedForm.formGroup = SimpleFormBuilder.toFormGroup(formElements);
    return unwrappedForm;
  }

  static createElement(type: string, label: string, inputId?: string){
    let elementInputId: string = inputId;
    if (!inputId) {
      elementInputId = SimpleFormBuilder.toInputId(label);
    }
    return new FormElement({
      inputId: elementInputId,
      type: type,
      label: label
    });
  }

  static toInputId(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }
}
