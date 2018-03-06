import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from '../../../../simple-forms.types';
import { ElementBaseComponent } from '../../element-base/element-base.component';

@Component({
  selector: 'app-grouped-radio-question',
  templateUrl: './grouped-radio-question.component.html',
  styleUrls: ['./../radio-question.component.scss', './grouped-radio-question.component.scss']
})
export class GroupedRadioQuestionComponent extends ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
