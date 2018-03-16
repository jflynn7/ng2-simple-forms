import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../../simple-forms.types';
import { AccessibilityUtils } from '../../../../accessibility-utils';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent implements OnInit {

  @Input() elementData: FormElement;
  @Input() hasFocus: boolean;
  @Input() hasError: boolean;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessageId() {
    return AccessibilityUtils.getErrorMessageId(this.elementData);
  }

  getHelpTextId() {
    return AccessibilityUtils.getHelpTextId(this.elementData);
  }

}
