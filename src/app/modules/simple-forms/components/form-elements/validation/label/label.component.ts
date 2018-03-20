import { Component, Input, OnInit } from '@angular/core';
import { LabelConfig, Styles } from '../../../../simple-forms.types';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() labelConfig: LabelConfig;
  @Input() cssParent: string;

  labelStyle: string;

  constructor() { }

  ngOnInit() {
    this.labelStyle = this.labelConfig.elementData.getStyle(Styles.ElementLabel());
  }

}
