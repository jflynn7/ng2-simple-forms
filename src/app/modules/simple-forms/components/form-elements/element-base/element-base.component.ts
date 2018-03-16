import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { SimpleFormBuilder } from '../../../builders/simple-forms.builder';
import { ComponentValue, FormElement, LabelConfig } from '../../../simple-forms.types';
import { AccessibilityUtils } from '../../../accessibility-utils';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-element-base',
  templateUrl: './element-base.component.html',
  styleUrls: ['./element-base.component.scss']
})
export class ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;
  @Output() changeEmitter: EventEmitter<ComponentValue> = new EventEmitter<ComponentValue>();

  isFocussed = false;

  labelConfig: LabelConfig;

  constructor() {
  }

  ngOnInit() {
  }

  emit() {
    this.formGroup.valueChanges.subscribe(value => {
      this.changeEmitter.emit(new ComponentValue({
        inputId: this.elementData.inputId,
        value: value[this.elementData.inputId],
        isValid: this.formGroup.valid
      }));
    });
  }

  getElementData(option?: { display: string, value: any }) {
    return {
      elementData: this.elementData,
      formGroup: this.formGroup,
      option: option
    };
  }

  getLabelConfig(): LabelConfig {
    return <LabelConfig> {
      isFocussed: this.isFocussed,
      elementData: this.elementData,
      inputHasValue: this.hasValue(),
      requiredMarker: this.getRequiredMarker(),
      inputIsInvalid: this.invalid(),
      inputIsValid: this.valid(),
      testId: this.getTestId()
    };
  }

  getFormGroup() {
    this.formGroup = this.formGroup ? this.formGroup : this.toOwnFormgroup();
    this.elementData.setProperty('formGroup', this.formGroup);
    this.emit();
  }

  toOwnFormgroup() {
      return SimpleFormBuilder.toFormGroup([this.elementData]);
  }

  hasFocus(): boolean {
    return this.isFocussed;
  }

  hasConfig(): boolean {
    return !!(this.elementData && this.elementData.config);
  }

  getTestId() {
    return this.elementData.getTestId();
  }

  getWrapperClass() {
    if (this.hasConfig()) {
      return this.elementData.config.wrapperCssClass;
    }
  }

  getInputClass() {
    if (this.hasConfig()) {
      return this.elementData.config.inputCss;
    }
  }

  getGroupLabelClass() {
    if (this.hasConfig()) {
      return this.elementData.config.groupLabelCssClass;
    }
  }

  getHelpTextId() {
    return AccessibilityUtils.getHelpTextId(this.elementData);
  }

  getErrorMessageId() {
    return AccessibilityUtils.getErrorMessageId(this.elementData);
  }

  getRequiredMarker() {
    if (this.hasConfig()) {
      return this.elementData.config.requiredMarker || '*';
    }
  }

  toggleFocus(hasFocus: boolean) {
    this.isFocussed = hasFocus;
    this.activateValidationListener();
  }

  activateValidationListener() {
    this.getElement().valueChanges.subscribe((value: any) => {
      if (value && !this.touched()) {
        this.formGroup.get(this.elementData.inputId).markAsTouched();
      }
    });
  }

  getElement() {
    return this.formGroup.get(this.elementData.inputId);
  }
  toInputId(str: string) {
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

  /// VALIDATION FUNCTIONS
  valid() {
    return this.formGroup.controls[this.elementData.inputId].touched && this.formGroup.controls[this.elementData.inputId].valid;
  }

  invalid() {
    return this.formGroup.controls[this.elementData.inputId].touched && this.formGroup.controls[this.elementData.inputId].invalid;
  }

  touched() {
    return this.formGroup.controls[this.elementData.inputId].touched;
  }

  showHelp() {
    return this.elementData.helpText && !this.valid() && !this.invalid();
  }

  hasValue() {
    if (this.formGroup && this.elementData) {
      return !!this.formGroup.get(this.elementData.inputId).value;
    }

    return false;
  }

  showError() {
    return this.elementData.errorText && this.invalid();
  }

}
