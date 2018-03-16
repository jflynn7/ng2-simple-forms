import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LabelConfig } from '../../../simple-forms.types';

@Directive({
  selector: '[appLabelAccessibility]'
})
export class LabelAccessibilityDirective implements AfterViewInit {

  @Input() appLabelAccessibility: LabelConfig;
  labelConfig: LabelConfig;
  constructor(private renderer2: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    this.labelConfig = this.appLabelAccessibility;
    this.renderer2.setAttribute(this.el.nativeElement, 'id', this.getLabelId());
    this.renderer2.setAttribute(this.el.nativeElement, 'data-test-id', this.getTestId());
    this.renderer2.setAttribute(this.el.nativeElement, 'for', this.getInputIdLabel());
  }

  getLabelId() {
    return `${this.labelConfig.elementData.inputId}_label`;
  }

  getTestId(modifier?: string) {
    return this.labelConfig.testId ? this.labelConfig.testId : this.getDefaultTestId(modifier);
  }

  getDefaultTestId(modifier?: string) {
    return modifier ? `${this.labelConfig.elementData.inputId}_${modifier}` : `${this.labelConfig.elementData.inputId}_label`;
  }

  getInputIdLabel() {
    return this.labelConfig.elementData.inputId;
  }

}
