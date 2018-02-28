import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../state/simple-forms.state';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-element-base',
  templateUrl: './element-base.component.html',
  styleUrls: ['./element-base.component.scss']
})
export class ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  helpToggled: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  hasConfig() {
    return this.elementData && this.elementData.config;
  }

  getWrapperClass() {
    if (this.hasConfig()) {
      return this.elementData.config.wrapperCssClass;
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
        case 'label': return this.elementData.config.ariaLabel;
        case 'describedby': return this.elementData.config.ariaDescribedBy;
      }
    }
  }

  valid() {
    return this.formGroup.controls[this.elementData.inputId].touched && this.formGroup.controls[this.elementData.inputId].valid;
  }

  invalid() {
    return this.formGroup.controls[this.elementData.inputId].touched && this.formGroup.controls[this.elementData.inputId].invalid;
  }

  showHelp() {
    return this.elementData.helpText && !this.valid() && !this.invalid();
  }
}
