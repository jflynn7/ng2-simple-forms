import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.scss']
})
export class RadioQuestionComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.getFormGroup();
  }

  isValid() {
    return !!this.formGroup.get(this.elementData.inputId).value && this.formGroup.get(this.elementData.inputId).touched;
  }

  isInvalid() {
    return false;
  }

  isTouched() {
    return this.formGroup.get(this.elementData.inputId).touched;
  }

  isSelected(value: any) {
    return value === this.formGroup.controls[this.elementData.inputId].value;
  }

}
