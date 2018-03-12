import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var PR: any;

@Component({
  selector: 'app-component-api-page',
  templateUrl: './component-api-page.component.html',
  styleUrls: ['./component-api-page.component.scss']
})
export class ComponentApiPageComponent implements OnInit, AfterViewInit {

  defaultInputAccessibilityRendering: string = '<input type="text" aria-label="First name" aria-labelledby="firstName_label" ' +
    'aria-required="true" aria-invalid="true" id="firstName" class="">';

  defaultLabelAccessibilityRendering: string = '<label id="<elementData.input>_label" data-test-id="<elementData.input>_label" aria-label="<elementData.input>_label" for="<elementData.input>">' +
    '<elementData.label> </label>';

  standardLabelCode: string = '<label id="firstName_label" data-test-id="firstName_label" aria-label="firstName_label" for="firstName">\n' +
    '  First name </label>';

  groupedRadioButtonLabelCode: string = '<label aria-label="countryOfResidenceGrouped_unitedKingdom_option_label" ' +
    'data-test-id="countryOfResidenceGrouped_UK_label" for="countryOfResidenceGrouped_UK_id">United Kingdom</label>';

  groupedRadioGroupLabelCode: string = '<label aria-label="europe_optionGroup_label" ' +
    'for="Europe" class="groupLabelSetByConfig">Europe</label>';

  groupedRadioButtonInputCode: string = '<input type="radio" id="countryOfResidenceUngrouped_UK_id" aria-selected="false" ' +
    'aria-invalid="false" selected="false" data-test-id="countryOfResidenceUngrouped_UK_RADIO" ' +
    'aria-labelledby="countryOfResidenceUngrouped_unitedKingdom_option_label">';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

}
