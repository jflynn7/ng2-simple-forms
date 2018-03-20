import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['../form-element.base.scss', './date-picker.component.scss']
})
export class DatePickerComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.initElement();
  }

}
