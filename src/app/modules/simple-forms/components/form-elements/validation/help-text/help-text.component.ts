import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../../simple-forms.state';

@Component({
  selector: 'app-help-text',
  templateUrl: './help-text.component.html',
  styleUrls: ['./help-text.component.scss']
})
export class HelpTextComponent implements OnInit {

  @Input() elementData: FormElement;
  helpVisible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleHelp() {
    this.helpVisible = !this.helpVisible;
  }

}
