import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { ElementOptionGroup } from '../../../simple-forms.types';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.getFormGroup();
    this.setElementStyles();
  }

  updateParentFormGroup(value: {}) {
    this.formGroup.controls[this.elementData.inputId].setValue(value);
    this.formGroup.controls[this.elementData.inputId].markAsTouched();
    if (!this.isValid()) {
      this.formGroup.get(this.elementData.inputId).setErrors({ invalid: 'Incorrect number of options selected' });
    }
  }

  isValid() {
    const minChoices: number = this.elementData.minLength || 0;
    const maxChoices: number = this.elementData.maxLength || this.getDefaultTotalOptions();
    const value = this.formGroup.get(this.elementData.inputId).value;
    let valueCount = 0;
    Object.getOwnPropertyNames(value).forEach(key => {
      if (value[key]) {
        valueCount++;
      }
    });

    const isValid = (valueCount >= minChoices && valueCount <= maxChoices) && this.formGroup.controls[this.elementData.inputId].touched;

    return isValid;
  }

  showCheckboxError() {
    return !!this.elementData.errorText && !this.isValid() && this.isTouched();
  }

  isTouched() {
    return this.formGroup.get(this.elementData.inputId).touched;
  }

  getDefaultTotalOptions() {
    if (this.elementData.options) {
      return this.elementData.options.length;
    } else {
      let count = 0;
      this.elementData.optionGroups.forEach((optionGroup: ElementOptionGroup) => {
        count += optionGroup.options.length;
      });
      return count;
    }
  }

}
