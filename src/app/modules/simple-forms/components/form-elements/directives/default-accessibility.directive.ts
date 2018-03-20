import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { Accessibility, FormElement, FormElementAccessibilityConfig } from '../../../simple-forms.types';
import { FormGroup } from '@angular/forms';
import { AccessibilityUtils } from '../../../accessibility-utils';

const unsupportedRequiredAria: string[] = ['radio', 'checkbox'];


@Directive({
  selector: '[appDefaultAccessibility]'
})
export class DefaultAccessibilityDirective implements AfterViewInit {

  @Input() appDefaultAccessibility: { elementData: FormElement, formGroup: FormGroup, option?: { display: string, value: any} };

  // LOCAL VARIABLES
  elementData: FormElement;
  option: { display: string, value: any };
  formGroup: FormGroup;

  // CONFIG
  accessibilityConfig: FormElementAccessibilityConfig;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2) {}

  ngAfterViewInit() {
    this.localiseVariables();
    this.applyGloballySupportedAria();
    this.applyTestId();
    this.applyConditionalAria();
    this.applyInputSpecificAria();
    this.listenForChange();
  }

  listenForChange() {
    this.formGroup.get(this.elementData.inputId).valueChanges.subscribe(() => {
      this.applyConditionalAria();
      this.applyInputSpecificAria();
    });
  }

  localiseVariables() {
    this.elementData = this.appDefaultAccessibility.elementData;
    this.option = this.appDefaultAccessibility.option;
    this.formGroup = this.appDefaultAccessibility.formGroup;
    this.accessibilityConfig = this.appDefaultAccessibility.elementData.accessibilityConfig;
  }

  applyInputSpecificAria() {
    switch (this.elementData.type.toLowerCase()) {
      case 'checkbox': this.applyCheckableAria();
      break;
      case 'radio': this.applyRadioAria();
      break;
      case 'range': this.applyRangeAria();
      break;
    }
  }

  /// RANGE
  applyRangeAria() {
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-valuenow', this.getValue());
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-valuemin', this.elementData.minLength.toString());
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-valuemax', this.elementData.maxLength.toString());
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-valuetext', AccessibilityUtils.toValueText(this.getValue()));
    this.renderer2.setAttribute(this.el.nativeElement, 'role', 'slider');
  }

  /// CHECKBOXES
  applyCheckableAria() {
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-invalid',
      <string> AccessibilityUtils.isValid(this.elementData, this.formGroup));

    this.renderer2.setAttribute(this.el.nativeElement, 'aria-checked',
      <string> AccessibilityUtils.isChecked(this.elementData, this.formGroup, this.option));
  }

  /// RADIO BUTTONS
  applyRadioAria() {
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-invalid',
      <string> AccessibilityUtils.isValid(this.elementData, this.formGroup));

    this.renderer2.setAttribute(this.el.nativeElement, 'aria-checked',
      <string> AccessibilityUtils.isSelected(this.elementData, this.formGroup, this.option));

    this.renderer2.setAttribute(this.el.nativeElement, 'checked',
      <string> AccessibilityUtils.isSelected(this.elementData, this.formGroup, this.option));

    this.renderer2.setAttribute(this.el.nativeElement, 'role', 'radio');
  }

  /// GLOBAL ARIA
  applyGloballySupportedAria() {
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-label', this.getAriaLabel());
    this.renderer2.setAttribute(this.el.nativeElement, 'aria-labelledby', this.getLabelledBy());
  }

  /// TEST ID
  applyTestId() {
    this.renderer2.setAttribute(this.el.nativeElement, 'data-test-id', this.getTestId());
  }

  /// CONDITIONALS
  applyConditionalAria() {

    if (this.elementData.helpText) {
      this.renderer2.setAttribute(this.el.nativeElement, 'aria-describedby', AccessibilityUtils.getHelpTextId(this.elementData));
    }

    if (this.requiredAriaSupported()) {
      this.renderer2.setAttribute(this.el.nativeElement, 'aria-required', this.getRequired());
    }

    if (this.getReadOnly()) {
      this.renderer2.setAttribute(this.el.nativeElement, 'aria-readonly', String(this.getReadOnly()));
      this.renderer2.setAttribute(this.el.nativeElement, 'readonly', String(this.getReadOnly()));
    }

  }

  /// UTILS
  requiredAriaSupported() {
    const truth: boolean[] = [];
    unsupportedRequiredAria.forEach((unsupported: string) => {
      if (unsupported === this.appDefaultAccessibility.elementData.type.toLowerCase()) {
        truth.push(true);
      }
    });
    return truth.length <= 0;
  }

  hasConfig(): boolean {
    return !!(this.appDefaultAccessibility.elementData && this.appDefaultAccessibility.elementData.config);
  }

  /// GETTERS
  getAriaLabel(): string {
    return this.elementData.getAccessibility(Accessibility.AriaLabel()) ||
      this.getDefaultAria('label', this.appDefaultAccessibility.option);
  }

  getLabelledBy(): string {
    return this.elementData.getAccessibility(Accessibility.AriaLabelledBy()) ||
      `${this.appDefaultAccessibility.elementData.inputId}_label`;
  }

  getRequired(): string {
    return String(!!this.appDefaultAccessibility.elementData.required);
  }

  getValue(): any {
    return this.formGroup.get(this.elementData.inputId).value;
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
    return this.option ? this.appDefaultAccessibility.elementData.getTestId(this.option.value)
      : this.appDefaultAccessibility.elementData.getTestId();
  }

}
