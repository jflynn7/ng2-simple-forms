import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ErrorMessageComponent } from './components/form-elements/validation/error-message/error-message.component';
import { FormElementComponent } from './components/form-element/form-element.component';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { CheckboxComponent } from './components/form-elements/checkbox/checkbox.component';
import { DatePickerComponent } from './components/form-elements/date-picker/date-picker.component';
import { DropdownQuestionComponent } from './components/form-elements/dropdown-question/dropdown-question.component';
import { PasswordInputComponent } from './components/form-elements/password-input/password-input.component';
import { TextInputComponent } from './components/form-elements/text-input/text-input.component';
import { SuccessIconComponent } from './components/form-elements/validation/success-icon/success-icon.component';
import { HelpIconComponent } from './components/form-elements/validation/help-icon/help-icon.component';
import { HelpTextComponent } from './components/form-elements/validation/help-text/help-text.component';
import { ElementBaseComponent } from './components/form-elements/element-base/element-base.component';
import { FieldGroupComponent } from './components/field-group/field-group.component';
import { LabelComponent } from './components/form-elements/validation/label/label.component';
import { RadioQuestionComponent } from './components/form-elements/radio-question/radio-question.component';
import { ErrorIconComponent } from './components/form-elements/validation/error-icon/error-icon.component';
import { GroupedDropdownQuestionComponent } from './components/form-elements/dropdown-question/grouped-dropdown-question/grouped-dropdown-question.component';
import { UngroupedDropdownQuestionComponent } from './components/form-elements/dropdown-question/ungrouped-dropdown-question/ungrouped-dropdown-question.component';
import { GroupedRadioQuestionComponent } from './components/form-elements/radio-question/grouped-radio-question/grouped-radio-question.component';
import { UngroupedRadioQuestionComponent } from './components/form-elements/radio-question/ungrouped-radio-question/ungrouped-radio-question.component';
import { UngroupedCheckboxQuestionComponent } from './components/form-elements/checkbox/ungrouped-checkbox-question/ungrouped-checkbox-question.component';
import { GroupedCheckboxQuestionComponent } from './components/form-elements/checkbox/grouped-checkbox-question/grouped-checkbox-question.component';
import { ValidationContainerComponent } from './components/form-elements/validation/validation-container/validation-container.component';
import { RangeComponent } from './components/form-elements/range/range.component';
import { ObjectSelectorComponent } from './components/form-elements/object-selector/object-selector.component';
import { LegendComponent } from './components/form-elements/validation/label/legend/legend.component';
import { DefaultAccessibilityDirective } from './components/form-elements/directives/default-accessibility.directive';
import { TextAreaComponent } from './components/form-elements/text-area/text-area.component';
import { LabelAccessibilityDirective } from './components/form-elements/directives/label-accessibility.directive';
import { FormElementStyleDirective } from './components/form-elements/directives/form-element-style.directive';
import { GroupLabelComponent } from './components/form-elements/validation/label/group-label/group-label.component';
import { FormElementValidationDirective } from './components/form-elements/directives/form-element-validation.directive';
import { ValidationMessagesComponent } from './components/form-elements/validation/validation-messages/validation-messages.component';
import { FormArrayElementComponent } from './components/form-elements/form-array-element/form-array-element.component';
import { FormArrayElementResolverComponent } from './components/form-elements/form-array-element/form-array-element-resolver/form-array-element-resolver.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormComponent,
    FormElementComponent,
    ErrorMessageComponent,
    FormWrapperComponent,
    CheckboxComponent,
    DatePickerComponent,
    DropdownQuestionComponent,
    PasswordInputComponent,
    TextInputComponent,
    RadioQuestionComponent,
    SuccessIconComponent,
    HelpIconComponent,
    HelpTextComponent,
    ElementBaseComponent,
    FieldGroupComponent,
    LabelComponent,
    ErrorIconComponent,
    GroupedDropdownQuestionComponent,
    UngroupedDropdownQuestionComponent,
    GroupedRadioQuestionComponent,
    UngroupedRadioQuestionComponent,
    UngroupedCheckboxQuestionComponent,
    GroupedCheckboxQuestionComponent,
    ValidationContainerComponent,
    RangeComponent,
    ObjectSelectorComponent,
    LegendComponent,
    DefaultAccessibilityDirective,
    TextAreaComponent,
    LabelAccessibilityDirective,
    FormElementStyleDirective,
    GroupLabelComponent,
    FormElementValidationDirective,
    ValidationMessagesComponent,
    FormArrayElementComponent,
    FormArrayElementResolverComponent
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    ErrorMessageComponent,
    FormWrapperComponent,
    CheckboxComponent,
    DatePickerComponent,
    DropdownQuestionComponent,
    PasswordInputComponent,
    TextInputComponent,
    RadioQuestionComponent,
    SuccessIconComponent,
    HelpIconComponent,
    HelpTextComponent,
    ElementBaseComponent,
    FieldGroupComponent,
    LabelComponent,
    ErrorIconComponent,
    GroupedDropdownQuestionComponent,
    UngroupedDropdownQuestionComponent,
    GroupedRadioQuestionComponent,
    UngroupedRadioQuestionComponent,
    UngroupedCheckboxQuestionComponent,
    GroupedCheckboxQuestionComponent,
    ValidationContainerComponent,
    RangeComponent,
    ObjectSelectorComponent,
    LegendComponent,
    DefaultAccessibilityDirective,
    FormArrayElementComponent,
    FormArrayElementResolverComponent
  ]
})
export class SimpleFormsModule { }
