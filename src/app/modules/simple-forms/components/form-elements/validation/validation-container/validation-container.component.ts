import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../../simple-forms.types';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-container',
  templateUrl: './validation-container.component.html',
  styleUrls: ['./validation-container.component.scss']
})
export class ValidationContainerComponent implements OnInit {


  @Input() valid: boolean;
  @Input() invalid: boolean;
  @Input() showHelp: boolean;
  @Input() showError: boolean;

  @Input() elementData: FormElement;
  @Input() cssClassOverride: string;

  helpVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleHelp() {
    this.helpVisible = !this.helpVisible;
  }

}
