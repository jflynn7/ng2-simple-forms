import { AfterViewInit, Component, ComponentRef, OnInit } from '@angular/core';
import { SimpleFormBuilder, SimpleFormBuilder as builder } from '../../../modules/simple-forms/builders/simple-forms.builder';
import { HttpClient } from '@angular/common/http';
import { Accessibility, Config, FormDetails, Properties, Styles } from '../../../modules/simple-forms/simple-forms.types';
import { timer } from 'rxjs/observable/timer';
import { FormArray } from '@angular/forms';
import { FormArrayElementComponent } from '../../../modules/simple-forms/components/form-elements/form-array-element/form-array-element.component';
declare var PR: any;

@Component({
  selector: 'app-form-from-json-example-page',
  templateUrl: './form-from-json-example-page.component.html',
  styleUrls: ['./form-from-json-example-page.component.scss']
})
export class FormFromJsonExamplePageComponent implements OnInit, AfterViewInit {

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
    '    "inputId" : "yourCar",\n' +
    '    "label" : "Your Car",\n' +
    '    "helpText" : "Please choose your car from the list",\n' +
    '    "type" : "OBJECT",\n' +
    '    "optionObjects" : [\n' +
    '      {\n' +
    '        "maker" : "Toyota",\n' +
    '        "model" : "Celica",\n' +
    '        "fuel" : "Petrol",\n' +
    '        "engine":"1.8"\n' +
    '      },\n' +
    '      {\n' +
    '        "maker" : "Toyota",\n' +
    '        "model" : "Corolla",\n' +
    '        "fuel" : "Diesel",\n' +
    '        "engine":"1.3"\n' +
    '      },\n' +
    '      {\n' +
    '        "maker" : "Toyota",\n' +
    '        "model" : "Aygo",\n' +
    '        "fuel" : "Petrol",\n' +
    '        "engine":"1.1"\n' +
    '      },\n' +
    '      {\n' +
    '        "maker" : "Citroen",\n' +
    '        "model" : "Picasso",\n' +
    '        "fuel" : "Petrol",\n' +
    '        "engine":"1.8"\n' +
    '      },\n' +
    '      {\n' +
    '        "maker" : "Suzuki",\n' +
    '        "model" : "Swift",\n' +
    '        "fuel" : "Petrol",\n' +
    '        "engine":"1.3"\n' +
    '      },\n' +
    '      {\n' +
    '        "maker" : "Suzuki",\n' +
    '        "model" : "Alto",\n' +
    '        "fuel" : "Petrol",\n' +
    '        "engine":"1.9"\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "password",\n' +
    '    "label" : "Password",\n' +
    '    "required": true,\n' +
    '    "minLength" : "3",\n' +
    '    "maxLength" : "50",\n' +
    '    "errorText" : "Please ensure your password is more than 3 characters",\n' +
    '    "type" : "PASSWORD"\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "firstName",\n' +
    '    "label" : "First name",\n' +
    '    "regex" : "^[a-zA-Z\\\\s\\\\-]*$",\n' +
    '    "required": true,\n' +
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
    '    "inputId" : "biography",\n' +
    '    "label" : "Your Bio",\n' +
    '    "maxLength" : "500",\n' +
    '    "helpText" : "Tell us a bit about you! Use this area to really sell yourself, you never know what information could make the difference!",\n' +
    '    "errorText" : "Please ensure your bio is less than 500 characters.",\n' +
    '    "type" : "TEXTAREA"\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "gender",\n' +
    '    "label" : "Gender",\n' +
    '    "required": true,\n' +
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
    '    "type" : "DATE"\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "countryOfBirth",\n' +
    '    "label" : "Country of birth",\n' +
    '    "helpText" : "Please enter your country of birth as shown on your ID",\n' +
    '    "type" : "SELECT",\n' +
    '    "options" : [\n' +
    '      {\n' +
    '        "value" : "UK",\n' +
    '        "display" : "United Kingdom"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "IT",\n' +
    '        "display" : "Italy"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "FR",\n' +
    '        "display" : "France"\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "nationality",\n' +
    '    "label" : "Nationality",\n' +
    '    "helpText" : "Please enter your nationality as shown on your ID",\n' +
    '    "type" : "SELECT",\n' +
    '    "optionGroups" : [\n' +
    '      {\n' +
    '        "groupName": "Europe",\n' +
    '        "options" : [\n' +
    '          {\n' +
    '            "value" : "UK",\n' +
    '            "display" : "United Kingdom"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "IT",\n' +
    '            "display" : "Italy"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "FR",\n' +
    '            "display" : "France"\n' +
    '          }\n' +
    '        ]\n' +
    '      },\n' +
    '      {\n' +
    '        "groupName": "Americas",\n' +
    '        "options" : [\n' +
    '          {\n' +
    '            "value" : "US",\n' +
    '            "display" : "United States"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "MX",\n' +
    '            "display" : "Mexico"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "CO",\n' +
    '            "display" : "Columbia"\n' +
    '          }\n' +
    '        ]\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "countryOfResidenceUngrouped",\n' +
    '    "label" : "Country of Residence (Ungrouped)",\n' +
    '    "helpText" : "Please enter your country of residence as shown on your ID",\n' +
    '    "type" : "RADIO",\n' +
    '    "options" : [\n' +
    '      {\n' +
    '        "value" : "UK",\n' +
    '        "display" : "United Kingdom"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "IT",\n' +
    '        "display" : "Italy"\n' +
    '      },\n' +
    '      {\n' +
    '        "value": "FR",\n' +
    '        "display": "France"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "US",\n' +
    '        "display" : "United States"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "MX",\n' +
    '        "display" : "Mexico"\n' +
    '      },\n' +
    '      {\n' +
    '        "value" : "CO",\n' +
    '        "display" : "Columbia"\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "countryOfResidenceGrouped",\n' +
    '    "label" : "Country of Residence (Grouped)",\n' +
    '    "helpText" : "Please enter your country of residence as shown on your ID",\n' +
    '    "type" : "RADIO",\n' +
    '    "optionGroups" : [\n' +
    '      {\n' +
    '        "groupName": "Europe",\n' +
    '        "options" : [\n' +
    '          {\n' +
    '            "value" : "UK",\n' +
    '            "display" : "United Kingdom"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "IT",\n' +
    '            "display" : "Italy"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "FR",\n' +
    '            "display" : "France"\n' +
    '          }\n' +
    '        ]\n' +
    '      },\n' +
    '      {\n' +
    '        "groupName": "Americas",\n' +
    '        "options" : [\n' +
    '          {\n' +
    '            "value" : "US",\n' +
    '            "display" : "United States"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "MX",\n' +
    '            "display" : "Mexico"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "CO",\n' +
    '            "display" : "Columbia"\n' +
    '          }\n' +
    '        ]\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "placesOfInterestGrouped",\n' +
    '    "label" : "Places of Interest (Grouped)",\n' +
    '    "helpText" : "Please tick any countries you would like to live in.",\n' +
    '    "errorText" : "Please select 2 or more, but no more than 4 options",\n' +
    '    "type" : "CHECKBOX",\n' +
    '    "minLength": "2",\n' +
    '    "maxLength": "4",\n' +
    '    "required": true,\n' +
    '    "optionGroups" : [\n' +
    '      {\n' +
    '        "groupName": "Europe",\n' +
    '        "options" : [\n' +
    '          {\n' +
    '            "value" : "UK",\n' +
    '            "display" : "United Kingdom"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "IT",\n' +
    '            "display" : "Italy"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "FR",\n' +
    '            "display" : "France"\n' +
    '          }\n' +
    '        ]\n' +
    '      },\n' +
    '      {\n' +
    '        "groupName": "Americas",\n' +
    '        "options" : [\n' +
    '          {\n' +
    '            "value" : "US",\n' +
    '            "display" : "United States"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "MX",\n' +
    '            "display" : "Mexico"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "CO",\n' +
    '            "display" : "Columbia"\n' +
    '          }\n' +
    '        ]\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "placesOfInterestUngrouped",\n' +
    '    "label" : "Places of Interest (Ungrouped)",\n' +
    '    "helpText" : "Please tick any countries you would like to live in.",\n' +
    '    "errorText" : "Please select 2 or more, but no more than 4 options",\n' +
    '    "type" : "CHECKBOX",\n' +
    '    "minLength": "2",\n' +
    '    "maxLength": "4",\n' +
    '    "required": true,\n' +
    '    "options" : [\n' +
    '          {\n' +
    '            "value" : "UK",\n' +
    '            "display" : "United Kingdom"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "IT",\n' +
    '            "display" : "Italy"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "FR",\n' +
    '            "display" : "France"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "US",\n' +
    '            "display" : "United States"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "MX",\n' +
    '            "display" : "Mexico"\n' +
    '          },\n' +
    '          {\n' +
    '            "value" : "CO",\n' +
    '            "display" : "Columbia"\n' +
    '          }\n' +
    '        ]\n' +
    '  },\n' +
    '  {\n' +
    '    "inputId" : "timeInCountry",\n' +
    '    "label" : "Time spent in country",\n' +
    '    "minLength" : "0",\n' +
    '    "maxLength" : "100",\n' +
    '    "helpText" : "Please select the length of time in years you have spent in your current country",\n' +
    '    "type" : "RANGE"\n' +
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
      this.jsonForm = builder.fromJson(value)
                      // Set custom Accessibility for 'firstName' field
                      .setAccessibility('firstName', Accessibility.AriaLabel, 'My Custom Aria Label')

                      // Set config for object selector
                      .setConfig('yourCar', Config.ObjectDisplayProperty, 'model')
                      .setConfig('yourCar', Config.ObjectGroupProperty, 'maker')
                      .setConfig('yourCar', Config.ShouldGroupObjects, true)

                      // Set custom styles for 'placesOfInterestUngrouped' field
                      .setStyle('placesOfInterestUngrouped', Styles.ElementWrapper, 'customElementWrapperCss')
                      .setStyle('placesOfInterestUngrouped', Styles.ElementInput, 'customInputCss')
                      .setStyle('placesOfInterestUngrouped', Styles.ElementLabel, 'customLabelCss')
                      .setStyle('placesOfInterestUngrouped', Styles.OptionLabel, 'customOptionLabelCss')

                      // Set custom styles for 'Gender' field
                      .setStyle('gender', Styles.ElementWrapper, 'customElementWrapperCss')
                      .setStyle('gender', Styles.Fieldset, 'customFieldsetCss');
    });


    timer(2000).subscribe(() => {
      const data: any[] = [
        {
          referenceName: 'Joe',
          referenceNumber: '07347343434',
          referenceEmail: 'joe@prettyfly.it'
        },
        {
          referenceName: 'Joe 2',
          referenceNumber: '07347343434',
          referenceEmail: 'joe@prettyfly.it'
        }
      ];

      this.jsonForm.get('references').setArrayValues(data);
    });

  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

  formSubmit(value: any) {
    this.submittedValue = value;
  }

}




