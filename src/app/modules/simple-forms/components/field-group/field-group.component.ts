import { Component, Input, OnInit } from '@angular/core';
import { LabelConfig } from '../../simple-forms.types';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss']
})
export class FieldGroupComponent implements OnInit {

  @Input() groupTitle: string;
  @Input() wrapperCssClass: string;
  @Input() valid: boolean;
  @Input() invalid: boolean;

  @Input() labelConfig: LabelConfig;

  constructor() { }

  ngOnInit() {
  }

}
