import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';
import { ElementOption, ElementOptionGroup } from '../../modules/simple-forms/simple-forms.types';
import { SimpleFormBuilder as builder } from '../../modules/simple-forms/builders/simple-forms.builder';

declare var PR: any;
@Component({
  selector: 'app-api-reference-page',
  templateUrl: './api-reference-page.component.html',
  styleUrls: ['./api-reference-page.component.scss']
})
export class ApiReferencePageComponent implements OnInit, AfterViewInit {

  singleElementCode = '<app-text-input [elementData]="singleElement" (changeEmitter)="getSingleElementValue($event)"></app-text-input>';
  optionGroupsExample: string = 'myElementOptionsGroups: ElementOptionGroup[] = [\n' +
    '    new ElementOptionGroup({\n' +
    '      groupName: \'Group 1\',\n' +
    '      options: [\n' +
    '        new ElementOption({ value: \'value1\', display: \'Value 1\' }),\n' +
    '        new ElementOption({ value: \'value2\', display: \'Value 2\' })\n' +
    '      ]\n' +
    '      }\n' +
    '    ),\n' +
    '    {\n' +
    '      groupName: \'Group 2\',\n' +
    '      options: [\n' +
    '        new ElementOption({ value: \'value3\', display: \'Value 3\' }),\n' +
    '        new ElementOption({ value: \'value4\', display: \'Value 4\' })\n' +
    '      ]\n' +
    '    }\n' +
    '  ];';

  myElementOptionsGroups: ElementOptionGroup[] = [
    new ElementOptionGroup({
      groupName: 'Group 1',
      options: [
        new ElementOption({ value: 'value1', display: 'Value 1' }),
        new ElementOption({ value: 'value2', display: 'Value 2' })
      ]
      }
    ),
    {
      groupName: 'Group 2',
      options: [
        new ElementOption({ value: 'value3', display: 'Value 3' }),
        new ElementOption({ value: 'value4', display: 'Value 4' })
      ]
    }
  ];

  singleSelectWithGroups = builder.createElement('select', 'My Select Input', {
    optionGroups: this.myElementOptionsGroups
  }).setConfig('wrapperCssClass', 'default-theme');

  myElementsArrayCode: string = 'myElementsArray = [\n' +
    '    builder.createElement(\'text\', \'Element One\'),\n' +
    '    builder.createElement(\'text\', \'Element Two\'),\n' +
    '    builder.createElement(\'radio\', \'Element Three\', { options:\n' +
    '        [\n' +
    '          new ElementOption({ value: \'elementThreeValueOne\', display: \'Value One\' }),\n' +
    '          new ElementOption({ value: \'elementThreeValueTwo\', display: \'Value Two\' }),\n' +
    '        ]\n' +
    '    })\n' +
    '  ];';

  myElementsArray = [
    builder.createElement('text', 'Element One'),
    builder.createElement('text', 'Element Two'),
    builder.createElement('radio', 'Element Three', { options:
        [
          new ElementOption({ value: 'elementThreeValueOne', display: 'Value One' }),
          new ElementOption({ value: 'elementThreeValueTwo', display: 'Value Two' }),
        ]
    }).setConfig('wrapperCssClass', 'default-theme')
  ];

  myFormDetailsCode: string = 'myFormDetails = builder.toFormDetails(this.myElementsArray);';
  myFormDetails = builder.toFormDetails(this.myElementsArray);

  selectRadioCode: string = '<app-form-element [formGroup]="myFormDetails.formGroup" [formElement]="myFormDetails.get(\'elementThree\')"></app-form-element>';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['object']) {
        const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#${params['object']}`);
        this.pageScrollService.start(pageScrollInstance);
      }
    });
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

}
