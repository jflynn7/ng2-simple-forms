import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { FormElement } from '../../../simple-forms.types';
import { FormGroup } from '@angular/forms';
const unsupportedRequiredAria: string[] = ['radio', 'checkbox'];

@Directive({
  selector: '[appDefaultAccessibility]'
})
export class DefaultAccessibilityDirective implements AfterViewInit {

  @Input() appDefaultAccessibility: { elementData: FormElement, formGroup: FormGroup, option?: { display: string, value: any} };

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2) {}

  ngAfterViewInit() {
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-label', this.getAriaLabel());
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-labelledby', this.getLabelledBy());

    if (this.requiredAriaSupported()) {
      this.renderer2.setAttribute(this.el.nativeElement, 'aria-required', this.getRequired());
    }

    this.renderer2.setAttribute(this.el.nativeElement, 'data-test-id', this.getTestId());

    if (this.getReadOnly()) {
      this.renderer2.setAttribute(this.el.nativeElement, 'aria-readonly', String(this.getReadOnly()));
      this.renderer2.setAttribute(this.el.nativeElement, 'readonly', String(this.getReadOnly()));
    }

  }

  requiredAriaSupported() {
    return !unsupportedRequiredAria.includes(this.appDefaultAccessibility.elementData.type.toLowerCase());
  }

  hasConfig(): boolean {
    return !!(this.appDefaultAccessibility.elementData && this.appDefaultAccessibility.elementData.config);
  }

  getAriaLabel(): string {
    return this.appDefaultAccessibility.elementData.config.ariaLabel || this.getDefaultAria('label', this.appDefaultAccessibility.option);
  }

  getLabelledBy(): string {
    return `${this.appDefaultAccessibility.elementData.inputId}_label`;
  }

  getRequired(): string {
    return String(!!this.appDefaultAccessibility.elementData.required);
  }

  getReadOnly(): string | boolean {
    if (this.hasConfig()) {
      const readOnly = this.appDefaultAccessibility.elementData.config.readOnly;
      if (readOnly === undefined ) {
        return false;
      }
      return String(this.appDefaultAccessibility.elementData.config.readOnly);
    }

    return false;
  }

  getDefaultAria(type: string, option?: { display: string, value: any}) {
    switch (type) {
      case 'label' : return option ? this.appDefaultAccessibility.option.display : this.appDefaultAccessibility.elementData.label;
    }
  }

  getTestId() {
    const option = this.appDefaultAccessibility.option;
    return option ? this.appDefaultAccessibility.elementData.getTestId(option.value) : this.appDefaultAccessibility.elementData.getTestId();
  }

  toInputId(str: string) {
    const words = str.split(' ');
    const mutated: string[] = words.map(function(word, index) {
      // If it is the first word make sure to lowercase all the chars.
      if (index === 0) {
        return word.toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return mutated.join('');
  }

}
