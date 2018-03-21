import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { SimpleFormBuilder } from '../../../builders/simple-forms.builder';
import { Accessibility, ComponentValue, FormElement, FormElementStyleConfig, LabelConfig, Styles } from '../../../simple-forms.types';
import { AccessibilityUtils } from '../../../accessibility-utils';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-element-base',
  templateUrl: './element-base.component.html',
  styleUrls: ['./element-base.component.scss']
})
export class ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() elementData: FormElement;
  @Output() changeEmitter: EventEmitter<ComponentValue> = new EventEmitter<ComponentValue>();

  isFocussed = false;

  // Label config
  labelConfig: LabelConfig;

  // Local Element Styles
  elementWrapperClass: string;
  elementGroupLabelClass: string;
  elementLabelClass: string;
  elementInputClass: string;
  elementFieldsetClass: string;
  elementLegendClass: string;
  elementOptionLabelClass: string;

  constructor() {
  }

  ngOnInit() {
  }

  initElement() {
    this.getFormGroup();
    this.setElementStyles();
  }

  setElementStyles() {
    this.elementWrapperClass = this.elementData.getStyle(Styles.ElementWrapper);
    this.elementGroupLabelClass = this.elementData.getStyle(Styles.GroupLabel);
    this.elementLabelClass = this.elementData.getStyle(Styles.ElementLabel);
    this.elementInputClass = this.elementData.getStyle(Styles.ElementInput);
    this.elementFieldsetClass = this.elementData.getStyle(Styles.Fieldset);
    this.elementLegendClass = this.elementData.getStyle(Styles.Legend);
    this.elementOptionLabelClass = this.elementData.getStyle(Styles.OptionLabel);
  }

  /**
   * Emit a ComponentValue when this element value changes
   * (Used when an element is rendered as single element without a FormGroup)
   */
  emit() {
    this.formGroup.valueChanges.subscribe(value => {
      this.changeEmitter.emit(new ComponentValue({
        inputId: this.elementData.inputId,
        value: value[this.elementData.inputId],
        isValid: this.formGroup.valid
      }));
    });
  }

  /**
   * Get the relevent data about this element
   * (Used for accessibility directive)
   */
  getElementData(option?: { display: string, value: any }) {
    return {
      elementData: this.elementData,
      formGroup: this.formGroup,
      option: option
    };
  }

  /**
   * Get this elements LabelConfig as an object to pass to LabelComponent
   */
  getLabelConfig(): LabelConfig {
    return <LabelConfig> {
      isFocussed: this.isFocussed,
      elementData: this.elementData,
      inputHasValue: this.hasValue(),
      requiredMarker: this.getRequiredMarker(),
      inputIsInvalid: this.invalid(),
      inputIsValid: this.valid(),
      testId: this.elementData.getTestId()
    };
  }

  /**
   * Get the default FormGroup for this element
   * (If part of a form, use forms Formgroup, else, create a FormGroup for JUST this element)
   */
  getFormGroup() {
    this.formGroup = this.formGroup ? this.formGroup : this.toOwnFormgroup();
    this.elementData.setProperty('formGroup', this.formGroup);
    this.emit();
  }

  /**
   * Create a single element FormGroup from this element
   */
  toOwnFormgroup() {
      return SimpleFormBuilder.toFormGroup([this.elementData]);
  }

  /**
   * Has the current element got focus?
   * (Used to apply 'has-focus' class to surrounding DOM elements (label, etc)
   */
  hasFocus(): boolean {
    return this.isFocussed;
  }

  /**
   * Check if element has config options
   */
  hasConfig(): boolean {
    return !!(this.elementData && this.elementData.config);
  }

  /**
   * Get a custom marker for required fields. If none supplied
   * in config, return *
   */
  getRequiredMarker() {
    if (this.hasConfig()) {
      return this.elementData.config.requiredMarker || '*';
    }
  }

  /**
   * Toggle focus of element input, and activate validation listener
   */
  toggleFocus(hasFocus: boolean) {
    this.isFocussed = hasFocus;
    this.activateValidationListener();
  }

  /**
   * Subscribe to the elements value changes to activate validation
   * on change, rather than on lose focus
   */
  activateValidationListener() {
    this.getElement().valueChanges.subscribe((value: any) => {
      if (value && !this.touched()) {
        this.formGroup.get(this.elementData.inputId).markAsTouched();
      }
    });
  }

  /**
   * Simple accessor for getting the FormControl by inputId
   */
  getElement(): FormControl {
    return <FormControl> this.formGroup.get(this.elementData.inputId);
  }

  /**
   * Convert string to camelCase inputId
   * @TODO - Remove from here and move to utils
   */
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

  /// VALIDATION FUNCTIONS
  valid() {
    return this.formGroup.controls[this.elementData.inputId].touched && this.formGroup.controls[this.elementData.inputId].valid;
  }

  invalid() {
    return this.formGroup.controls[this.elementData.inputId].touched && this.formGroup.controls[this.elementData.inputId].invalid;
  }

  touched() {
    return this.formGroup.controls[this.elementData.inputId].touched;
  }

  hasValue() {
    if (this.formGroup && this.elementData) {
      return !!this.formGroup.get(this.elementData.inputId).value;
    }

    return false;
  }

}
