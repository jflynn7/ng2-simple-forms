import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { SimpleFormBuilder } from '../../../builders/simple-forms.builder';
import { ComponentValue, FormElement, LabelConfig } from '../../../simple-forms.types';

@Component({
  selector: 'app-element-base',
  templateUrl: './element-base.component.html',
  styleUrls: ['./element-base.component.scss']
})
export class ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;
  @Output() changeEmitter: EventEmitter<ComponentValue> = new EventEmitter<ComponentValue>();

  helpVisible = false;
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

  getLabelConfig() {
    return {
      isFocussed: this.isFocussed,
      elementData: this.elementData,
      inputHasValue: this.hasValue(),
      requiredMarker: this.getRequiredMarker(),
      inputIsInvalid: this.invalid(),
      inputIsValid: this.valid()
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

  hasConfig(): boolean {
    return !!(this.elementData && this.elementData.config);
  }

  getAriaLabel(): string {
    return this.elementData.config.ariaLabel || this.getDefaultAria('label');
  }

  getLabelledBy(): string {
    return `${this.elementData.inputId}_label`;
  }

  getRequired(): boolean {
    return !!this.elementData.required;
  }

  getReadOnly() {
    if (this.hasConfig()) {
      return this.elementData.config.readOnly;
    }
  }

  getTestId() {
    return this.elementData.getTestId();
  }

  getWrapperClass() {
    if (this.hasConfig()) {
      return this.elementData.config.wrapperCssClass;
    }
  }

  getGroupLabelClass() {
    if (this.hasConfig()) {
      return this.elementData.config.groupLabelCssClass;
    }
  }

  getRequiredMarker() {
    if (this.hasConfig()) {
      return this.elementData.config.requiredMarker || '*';
    }
  }

  getDefaultAria(type: string) {
    switch (type) {
      case 'label' : return this.elementData.label;
    }
  }

  toggleFocus(hasFocus: boolean) {
    this.isFocussed = hasFocus;
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
