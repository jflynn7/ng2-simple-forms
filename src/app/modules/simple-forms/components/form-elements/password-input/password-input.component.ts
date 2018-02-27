import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['../form-element.base.scss', './password-input.component.scss']
})
export class PasswordInputComponent extends ElementBaseComponent implements OnInit {
    constructor() {
      super();
    }

    ngOnInit() {
    }

}
