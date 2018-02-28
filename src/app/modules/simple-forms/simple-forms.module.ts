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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    ErrorIconComponent
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    ErrorMessageComponent,
    FormWrapperComponent,
    FieldGroupComponent
  ]
})
export class SimpleFormsModule { }
