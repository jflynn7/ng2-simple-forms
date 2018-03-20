import { FormGroup } from '@angular/forms';

import * as numberToWords from 'number-to-words';
import { ElementOption, FormElement } from './simple-forms.types';

export class AccessibilityUtils {

  public static toInputId(str: string){
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

  public static isValid(elementData: FormElement, formGroup: FormGroup): string {
    return (formGroup.get(elementData.inputId).valid).toString();
  }

  public static isSelected(elementData: FormElement, formGroup: FormGroup, option: ElementOption): string {
    return option ? (formGroup.get(elementData.inputId).value === option.value).toString() : 'false';
  }

  public static isChecked(elementData: FormElement, formGroup: FormGroup, option: ElementOption): string {
    return (!!formGroup.get(elementData.inputId).value[option.value]).toString();
  }

  public static toValueText(value: number) {
    return value ? numberToWords.toWords(value) : 'zero';
  }

  public static getHelpTextId(elementData: FormElement) {
    return `${elementData.inputId}_helpText`;
  }

  public static getErrorMessageId(elementData: FormElement) {
    return `${elementData.inputId}_error`;
  }

}
