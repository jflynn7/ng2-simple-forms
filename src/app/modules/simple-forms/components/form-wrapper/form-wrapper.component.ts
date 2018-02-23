import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {

  @Input() classOverride: string;

  constructor() { }

  ngOnInit() {
  }

}
