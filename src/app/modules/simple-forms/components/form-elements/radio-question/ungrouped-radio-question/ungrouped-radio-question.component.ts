import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from '../../../../simple-forms.types';
import { ElementBaseComponent } from '../../element-base/element-base.component';

@Component({
  selector: 'app-ungrouped-radio-question',
  templateUrl: './ungrouped-radio-question.component.html',
  styleUrls: ['./../radio-question.component.scss', './ungrouped-radio-question.component.scss']
})
export class UngroupedRadioQuestionComponent extends ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
