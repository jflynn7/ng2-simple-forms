import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../../simple-forms.types';
import { FormGroup } from '@angular/forms';
import { ElementBaseComponent } from '../../element-base/element-base.component';

@Component({
  selector: 'app-ungrouped-dropdown-question',
  templateUrl: './ungrouped-dropdown-question.component.html',
  styleUrls: ['./../dropdown-question.component.scss', './ungrouped-dropdown-question.component.scss']
})
export class UngroupedDropdownQuestionComponent extends ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
