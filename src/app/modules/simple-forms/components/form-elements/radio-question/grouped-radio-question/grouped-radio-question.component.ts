import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement, LabelConfig } from '../../../../simple-forms.types';
import { RadioQuestionComponent } from '../radio-question.component';

@Component({
  selector: 'app-grouped-radio-question',
  templateUrl: './grouped-radio-question.component.html',
  styleUrls: ['./../radio-question.component.scss', './grouped-radio-question.component.scss']
})
export class GroupedRadioQuestionComponent extends RadioQuestionComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
