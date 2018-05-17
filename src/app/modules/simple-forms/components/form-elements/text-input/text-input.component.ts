import { Component, Input, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['../form-element.base.scss', './text-input.component.scss']
})
export class TextInputComponent extends ElementBaseComponent implements OnInit {

  @Input() textTypeOverride: string = 'text';

  constructor() {
    super();
  }

  ngOnInit() {
    this.initElement();
  }

}
