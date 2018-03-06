import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../../simple-forms.types';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() elementData: FormElement;

  @Input() requiredMarker: string;

  @Input() inputFocussed: boolean;
  @Input() inputHasValue: boolean;
  @Input() inputIsValid: boolean;
  @Input() inputIsInvalid: boolean;

  constructor() { }

  ngOnInit() {
  }

}
