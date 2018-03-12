import { Component, Input, OnInit } from '@angular/core';
import { FormElement, LabelConfig } from '../../../../simple-forms.types';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() labelConfig: LabelConfig;
  @Input() cssParent: string;

  constructor() { }

  ngOnInit() {
  }

  getLabelId() {
    return `${this.labelConfig.elementData.inputId}_label`;
  }

  getInputIdLabel() {
    return this.labelConfig.elementData.inputId;
  }

  getTestId(modifier?: string) {
    return this.labelConfig.testId ? this.labelConfig.testId : this.getDefaultTestId(modifier);
  }

  getDefaultTestId(modifier?: string) {
    return modifier ? `${this.labelConfig.elementData.inputId}_${modifier}` : `${this.labelConfig.elementData.inputId}_label`;
  }
}
