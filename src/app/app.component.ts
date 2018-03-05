import { Component, OnInit, ViewChild } from '@angular/core';
import {FormElement, FormDetails, ElementOption, ElementOptionGroup} from "./modules/simple-forms/state/simple-forms.state";
import { SimpleFormBuilder } from './modules/simple-forms/builders/simple-forms.builder';
import { FormComponent } from './modules/simple-forms/components/form/form.component';

export let PR: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 constructor() {}

 ngOnInit() {

 }

}
