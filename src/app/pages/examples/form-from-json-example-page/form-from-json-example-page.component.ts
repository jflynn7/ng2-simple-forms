import { Component, OnInit } from '@angular/core';
import { FormDetails } from '../../../modules/simple-forms/state/simple-forms.state';
import { SimpleFormBuilder as builder } from '../../../modules/simple-forms/builders/simple-forms.builder';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-from-json-example-page',
  templateUrl: './form-from-json-example-page.component.html',
  styleUrls: ['./form-from-json-example-page.component.scss']
})
export class FormFromJsonExamplePageComponent implements OnInit {

  submittedValue: string = 'No Value Submitted Yet';

  jsonStructure: string = '[\n' +
    '  {\n' +
    '    "inputId" : "title",\n' +
    '    "label" : "Title",\n' +
    '    "helpText" : "Please enter your title as shown on your ID",\n' +
    '    "type" : "SELECT",\n' +
    '    "options" : [\n' +
    '      {\n' +
    '        "value" : "mr",\n' +
    '        "display" : "Mr"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "miss",\n' +
    '        "display" : "Miss"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "mrs",\n' +
    '        "display" : "Mrs"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "sir",\n' +
    '        "display" : "Sir"\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "firstName",\n' +
    '    "label" : "First name",\n' +
    '    "regex" : "^[a-zA-Z\\\\s\\\\-]*$",\n' +
    '    "minLength" : "3",\n' +
    '    "maxLength" : "50",\n' +
    '    "errorText" : "Please don’t use special characters, only letters and hyphens (for double-barrel names) are valid",\n' +
    '    "helpText" : "Please enter your first name as shown on your ID",\n' +
    '    "type" : "TEXT"\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "middleName",\n' +
    '    "label" : "Middle name",\n' +
    '    "regex" : "^[a-zA-Z\\\\s\\\\-]*$",\n' +
    '    "minLength" : "3",\n' +
    '    "maxLength" : "35",\n' +
    '    "errorText" : "Please don’t use special characters, only letters and hyphens (for double-barrel names) are valid",\n' +
    '    "type" : "TEXT"\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "surname",\n' +
    '    "label" : "Surname",\n' +
    '    "regex" : "^[a-zA-Z\\\\s\\\\-]*$",\n' +
    '    "minLength" : "3",\n' +
    '    "maxLength" : "50",\n' +
    '    "errorText" : "Please don’t use special characters, only letters and hyphens (for double-barrel names) are valid",\n' +
    '    "helpText" : "Please enter your surname as shown on your ID",\n' +
    '    "type" : "TEXT"\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "gender",\n' +
    '    "label" : "Gender",\n' +
    '    "validationRequired" : "REQUIRED",\n' +
    '    "type" : "RADIO",\n' +
    '    "options" : [\n' +
    '      {\n' +
    '        "value" : "m",\n' +
    '        "display" : "Male"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "f",\n' +
    '        "display" : "Female"\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "dateOfBirth",\n' +
    '    "label" : "Date of birth",\n' +
    '    "supplementaryLabel" : "[DD/MM/YYYY]",\n' +
    '    "errorText" : "You must be at least 18 years old and enter DoB in DD/MM/YYYY format",\n' +
    '    "helpText" : "Please enter your date of birth as shown on your ID",\n' +
    '    "type" : "DOB"\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "countryOfBirth",\n' +
    '    "label" : "Country of birth",\n' +
    '    "helpText" : "Please enter your country of birth as shown on your ID",\n' +
    '    "type" : "SELECT",\n' +
    '    "options" : [ {\n' +
    '      "value" : "GB",\n' +
    '      "display" : "United Kingdom"\n' +
    '    } ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "nationality",\n' +
    '    "label" : "Nationality",\n' +
    '    "helpText" : "Please enter your nationality as shown on your ID",\n' +
    '    "type" : "SELECT",\n' +
    '    "options" : [ {\n' +
    '      "value" : "GB",\n' +
    '      "display" : "United Kingdom"\n' +
    '    } ]\n' +
    '  }\n' +
    ']\n';

  jsonForm: FormDetails = undefined;

  httpGetSample: string = 'jsonForm: FormDetails;\n\n' +
    'this.http.get(\'./assets/sampleForm.json\').subscribe(value => {\n' +
    '      this.jsonForm = builder.fromJson(value);\n' +
    '});';

  renderCode: string = '<app-form\n' +
    '        *ngIf="jsonForm"\n' +
    '        [form]="jsonForm"\n' +
    '        [formTitle]="\'My Form From JSON\'"\n' +
    '        [formSubtitle]="\'A simple form created dynamically from a JSON file\'"\n' +
    '        (submitEmitter)="formSubmit($event)">\n' +
    '</app-form>';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('./assets/sampleForm.json').subscribe(value => {
      this.jsonForm = builder.fromJson(value);
    });

  }

  formSubmit(value: any) {
    this.submittedValue = value;
  }

}




