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

}
