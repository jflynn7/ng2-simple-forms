import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormElement } from '../../../../simple-forms.types';
import { AccessibilityUtils } from '../../../../accessibility-utils';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent implements OnInit, OnChanges {

  @ViewChild('helpMessage') helpMessage: ElementRef;
  @ViewChild('errorMessage') errorMessage: ElementRef;

  @Input() elementData: FormElement;
  @Input() hasFocus: boolean;
  @Input() hasError: boolean;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.hasFocus) {
      this.renderer2.setAttribute(this.helpMessage.nativeElement, 'aria-live', 'polite');
    } else {
      this.renderer2.removeAttribute(this.helpMessage.nativeElement, 'aria-live');
    }

    if (this.hasError) {
      this.renderer2.setAttribute(this.errorMessage.nativeElement, 'aria-live', 'assertive');
    } else {
      this.renderer2.removeAttribute(this.errorMessage.nativeElement, 'aria-live');
    }
  }

  getErrorMessageId() {
    return AccessibilityUtils.getErrorMessageId(this.elementData);
  }

  getHelpTextId() {
    return AccessibilityUtils.getHelpTextId(this.elementData);
  }

}
