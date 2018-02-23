import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from '../../state/simple-forms.state';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() formElement: FormElement;
  @Input() classOverride: string;

  constructor() { }

  ngOnInit() {
  }

}
