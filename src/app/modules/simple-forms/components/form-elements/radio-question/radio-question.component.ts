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
    this.initElement();
  }

  isValid() {
    return !!this.formGroup.get(this.elementData.inputId).value && this.formGroup.get(this.elementData.inputId).touched;
  }

  isTouched() {
    return this.formGroup.get(this.elementData.inputId).touched;
  }

}
