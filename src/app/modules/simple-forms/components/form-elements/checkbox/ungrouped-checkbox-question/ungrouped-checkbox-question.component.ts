import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormElement } from '../../../../simple-forms.types';
import { ElementBaseComponent } from '../../element-base/element-base.component';

@Component({
  selector: 'app-ungrouped-checkbox-question',
  templateUrl: './ungrouped-checkbox-question.component.html',
  styleUrls: ['./../checkbox.component.scss', './ungrouped-checkbox-question.component.scss']
})
export class UngroupedCheckboxQuestionComponent extends ElementBaseComponent implements OnInit {

  checkboxGroup: FormGroup;
  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.checkboxGroup = this.formBuilder.group(this.getOptions());
    this.checkboxGroup.valueChanges.subscribe(value => {
      this.updateParentFormGroup(value);
    });
  }

  getOptions() {
    const childForm: {} = {};
    this.elementData.options.forEach((option) => {
      childForm[option.value] = [''];
    });
    return childForm;
  }

  updateParentFormGroup(value: {}) {
    this.formGroup.controls[this.elementData.inputId].setValue(value);
  }

}
