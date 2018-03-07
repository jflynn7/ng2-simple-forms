import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../../simple-forms.types';
import { FormGroup } from '@angular/forms';
import { ElementBaseComponent } from '../../element-base/element-base.component';

@Component({
  selector: 'app-grouped-dropdown-question',
  templateUrl: './grouped-dropdown-question.component.html',
  styleUrls: [
    './../../form-element.base.scss',
    './../dropdown-question.component.scss',
    './grouped-dropdown-question.component.scss']
})
export class GroupedDropdownQuestionComponent extends ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
