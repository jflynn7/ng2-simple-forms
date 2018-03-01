import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-form-group-example-page',
  templateUrl: './no-form-group-example-page.component.html',
  styleUrls: ['./no-form-group-example-page.component.scss']
})
export class NoFormGroupExamplePageComponent implements OnInit {

  example: string = `<app-text-input [elementData]="singleElement" (changeEmitter)="getSingleElementValue($event)"></app-text-input>`;
  constructor() { }

  ngOnInit() {
  }

}
