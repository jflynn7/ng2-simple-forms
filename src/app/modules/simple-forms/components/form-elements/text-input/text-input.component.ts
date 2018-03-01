import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['../form-element.base.scss', './text-input.component.scss']
})
export class TextInputComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.getFormGroup();
  }

}
