import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SimpleFormBuilder as builder } from '../../../modules/simple-forms/builders/simple-forms.builder';
import { FormGroup } from '@angular/forms';
import { FormElement, Properties } from '../../../modules/simple-forms/simple-forms.types';

declare var PR: any;

@Component({
  selector: 'app-form-groups-page',
  templateUrl: './form-groups-page.component.html',
  styleUrls: ['./form-groups-page.component.scss']
})
export class FormGroupsPageComponent implements OnInit, AfterViewInit {

  manualFormCode: string = '<form [formGroup]="formGroup">\n' +
    ' <label>Title</label>\n' +
    ' <input type="text" formControlName="title"/>\n' +
    ' <label>First Name></label>\n' +
    ' <input type="text" formControlName="firstName"/>\n' +
    ' <span *ngIf="!formGroup.controls.get(\'firstName\').valid">\n' +
    '   First name is a required field and must be 3 characters minimum\n' +
    ' </span>' +
    ' <label>Surname</label>\n' +
    ' <input type="text" formControlName="surname"/>\n' +
    ' <span *ngIf="!formGroup.controls.get(\'surname\').valid">\n' +
    '   Surname is a required field and must be 3 characters minimum\n' +
    ' </span>\n' +
    '</form> ';

  simpleFormsCode: string = '<app-form-element [formGroup]="formGroup" [formElement]="title"></app-form-element>\n' +
    '<app-form-element [formGroup]="formGroup" [formElement]="firstName"></app-form-element>\n' +
    '<app-form-element [formGroup]="formGroup" [formElement]="surname"></app-form-element>\n';

  title = builder.createElement('text', 'Title');
  firstName: FormElement = builder.createElement('text', 'First Name', { required: true, minLength: 3 });
  surname = builder.createElement('text', 'Surname',  { required: true, minLength: 3 });

  formGroup: FormGroup = builder.toFormGroup([this.title, this.firstName, this.surname]);

  constructor() { }

  ngOnInit() {
    this.firstName.setProperty(Properties.ErrorText(), 'First name is a required field and must be 3 characters minimum');
    this.surname.setProperty(Properties.ErrorText(), 'Surname is a required field and must be 3 characters minimum');
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }
}
