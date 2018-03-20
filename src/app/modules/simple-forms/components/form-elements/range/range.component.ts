import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

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
    this.initElement();
    this.formGroup.get(this.elementData.inputId).setValue(0);
  }

}
