import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormElement } from '../../../state/simple-forms.state';
import { FormGroup } from '@angular/forms';
import { SimpleFormBuilder } from '../../../builders/simple-forms.builder';

@Component({
  selector: 'app-element-base',
  templateUrl: './element-base.component.html',
  styleUrls: ['./element-base.component.scss']
})
export class ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  helpToggled: boolean = false;
  @Output() changeEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  emit() {
    this.formGroup.valueChanges.subscribe(value => {
      this.changeEmitter.emit(value[this.elementData.inputId]);
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
