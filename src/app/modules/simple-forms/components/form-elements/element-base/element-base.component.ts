import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { SimpleFormBuilder } from '../../../builders/simple-forms.builder';
import { ComponentValue, FormElement } from '../../../simple-forms.types';

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

  getAria(type: string) {
    if (this.hasConfig()) {
      switch (type) {
        case 'label': return this.elementData.config.ariaLabel || this.getDefaultAria('label');
        case 'describedby': return this.elementData.config.ariaDescribedBy;
      }
    }
  }

  getDefaultAria(type: string) {
    switch (type) {
      case 'label' : return this.elementData.label;
    }
  }

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

  toggleHelp() {
    this.helpVisible = !this.helpVisible;
  }

  showError() {
    return this.elementData.errorText && this.invalid();
  }

  toggleFocus(hasFocus: boolean) {
    this.isFocussed = hasFocus;
  }

}
