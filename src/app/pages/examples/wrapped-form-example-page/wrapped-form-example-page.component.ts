import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SimpleFormBuilder as builder } from '../../../modules/simple-forms/builders/simple-forms.builder';
import { FormComponent, FormConfig } from '../../../modules/simple-forms/components/form/form.component';
import { FormDetails, FormElement } from '../../../modules/simple-forms/simple-forms.types';
declare var PR: any;

@Component({
  selector: 'app-wrapped-form-example-page',
  templateUrl: './wrapped-form-example-page.component.html',
  styleUrls: ['./wrapped-form-example-page.component.scss']
})
export class WrappedFormExamplePageComponent implements OnInit, AfterViewInit {

  @ViewChild('myViewChildForm') myViewChildForm: FormComponent;


  viewChildDefinition = '@ViewChild(\'myViewChildForm\') myViewChildForm: FormComponent;';

  createFormElementsArrayCode: string = 'myFormElements: FormElement[] = [\n' +
    '\n' +
    '    /// Simple text element (inputId generated from label)\n' +
    '    builder.createElement(\'text\', \'Simple One\'),\n' +
    '\n' +
    '    /// With explicit inputId\n' +
    '    builder.createElement(\'text\', \'Simple Two\', { inputId: \'simpleTwoInputId\' }),\n' +
    '\n' +
    '    /// With inline configuration (see Configuration for more info)\n' +
    '    builder.createElement(\'text\', \'Simple Three\')\n' +
    '      .setConfig( \'ariaLabel\', \'Simple Three Aria Label\'),\n' +
    '\n' +
    '    /// With inline property value (see Setting Properties for more info)\n' +
    '    builder.createElement(\'text\', \'Simple Four\')\n' +
    '      .setProperty(\'helpText\', \'Here is some helptext!\')\n' +
    '      .setProperty(\'required\', true) ' +
    '\n    /// ....etc\n' +
    '];';
  createFormDetailsCode = 'myFormDetails: FormDetails = builder.toFormDetails(this.myFormElements)';
  formWithTitleAndSubtitleCode = '<app-form [form]="myFormDetails" [formTitle]="\'My Form Title\'" ' +
    '[formSubtitle]="\'A simple form created with ng2-simple-forms\'"></app-form>';
  wrappedFormCode = '<app-form [form]="myFormDetails"></app-form>';
  viewChildRefExampleCode = '\'<app-form #myViewChildForm [form]="myFormDetails" ' +
    '[formTitle]="\'My Form Title\'" [formSubtitle]="\'A simple form created with ng2-simple-forms\'"></app-form>\';';

  formConfigObjectDef: string = '{\n' +
    '    wrapperCssClass: \'\', // Allows you to pass a custom CSS class to apply to the form wrapper container\n' +
    '    formElementCssClass: \'\', // Allows you to pass a custom CSS class to apply to each form element in the form\n' +
    '    buttonCssClass: \'\', // Allows you to pass a custom CSS class to apply to each button in the form\n' +
    '    submitButtonLabel: \'Submit\', // Allows you to modify the submit button text\n' +
    '    clearButtonLabel: \'Clear\' // Allows you to modify the clear button text\n' +
    '};';

  scssExample: string = '.myFormWrapper {\n' +
    '  background-color: #1a2229;\n' +
    '  padding: 0 20px 20px;\n' +
    '  border-radius: 3px;\n' +
    '  border: 1px solid lighten(#1a2229, 5%);\n' +
    '  color: #00b3ee;\n' +
    '\n' +
    '  .myElementClass {\n' +
    '\n' +
    '    input {\n' +
    '      border-radius: 3px;\n' +
    '      border: 1px solid #455563;\n' +
    '      background-color: #2e3c48;\n' +
    '      color: #72c2ff;\n' +
    '      padding-top: 10px;\n' +
    '      text-indent: 10px;\n' +
    '     }\n' +
    '\n' +
    '    .validation-icon {\n' +
    '      font-size: 20px;\n' +
    '      top: 4px;\n' +
    '    }\n' +
    '\n' +
    '  }\n' +
    '\n' +
    '  .myButton {\n' +
    '    color: #72c2ff;\n' +
    '    background-color: #2e3c48;\n' +
    '    border-radius: 2px;\n' +
    '    border: 1px solid #455563;\n' +
    '    padding: 12px 10px;\n' +
    '\n' +
    '    &:hover {\n' +
    '      cursor: pointer;\n' +
    '      background-color: lighten(#2e3c48, 5%);\n' +
    '    }\n' +
    '  }\n' +
    '}';

  myFormElements: FormElement[] = [

    /// Simple text element (inputId generated from label)
    builder.createElement('text', 'Simple One'),

    /// With explicit inputId
    builder.createElement('text', 'Simple Two', { inputId: 'simpleTwoInputId' }),

    /// With inline configuration (see Configuration for more info)
    builder.createElement('text', 'Simple Three')
      .setAccessibility( 'ariaLabel', 'Simple Three Aria Label Set By Config'),

    /// With inline property value (see Setting Properties for more info)
    builder.createElement('text', 'Simple Four')
      .setProperty('helpText', 'Here is some helptext!')
      .setProperty('required', true),
  ] ;

  myFormDetails: FormDetails = builder.toFormDetails(this.myFormElements);

  formConfigExample: string = 'myFormConfig: FormConfig = {\n' +
    '    wrapperCssClass: \'myFormWrapper\',\n' +
    '    formElementCssClass: \'myElementClass\',\n' +
    '    buttonCssClass: \'myButton\',\n' +
    '    submitButtonLabel: \'Go, Go, Gadget Button\',\n' +
    '    clearButtonLabel: \'Nuke it!\'\n' +
    '};';

  withConfigExample: string = ' <app-form\n' +
    '    [form]="myFormDetails"\n' +
    '    [formTitle]="\'My Form Title\'"\n' +
    '    [formSubtitle]="\'A simple form created with ng2-simple-forms\'"\n' +
    '    [formOptions]="myFormConfig">\n' +
    '</app-form>';

  submitEmitterSubscriptionCode: string =
    '<app-form (submitEmitter)="myListeningFunction($event)" ' +
    '[form]="myFormDetails" [formTitle]="\'My Form Title\'" ' +
    '[formSubtitle]="\'A simple form created with ng2-simple-forms\'">' +
    '</app-form>';

  changeEmitterSubscriptionCode: string =
    '<app-form (changeEmitter)="myListeningFunction($event)" ' +
    '[form]="myFormDetails" [formTitle]="\'My Form Title\'" ' +
    '[formSubtitle]="\'A simple form created with ng2-simple-forms\'">' +
    '</app-form>';

  listeningFunctionCode: string = 'listeningFunction(data: any) {\n' +
    '    // do something fun with the data\n' +
    '    console.log(data);\n' +
    '}';

  myFormConfig: FormConfig = {
    wrapperCssClass: 'myFormWrapper',
    formElementCssClass: 'myElementClass',
    buttonCssClass: 'myButton',
    submitButtonLabel: 'Go, Go, Gadget Button',
    clearButtonLabel: 'Nuke it!'
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

}
