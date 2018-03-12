import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import * as numberToWords from 'number-to-words';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./../form-element.base.scss', './range.component.scss']
})
export class RangeComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  toValueText(value: number) {
    return value ? numberToWords.toWords(value) : 'No Value';
  }

}
