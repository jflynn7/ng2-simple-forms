import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends ElementBaseComponent implements OnInit {

  checkboxGroup: FormGroup;
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
