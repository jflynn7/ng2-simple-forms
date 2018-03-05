import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var PR: any;

@Component({
  selector: 'app-creating-elements-page',
  templateUrl: './creating-elements-page.component.html',
  styleUrls: ['./creating-elements-page.component.scss']
})
export class CreatingElementsPageComponent implements OnInit, AfterViewInit {

  formElementComponentCode: string = '<app-form-element [formGroup]="myFormGroup" [formElement]="myFirstInputElement"></app-form-element>'
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

}
