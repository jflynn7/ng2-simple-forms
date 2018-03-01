import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.getFormGroup();
  }

}
