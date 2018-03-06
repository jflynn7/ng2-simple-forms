import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.getFormGroup();
  }

}
