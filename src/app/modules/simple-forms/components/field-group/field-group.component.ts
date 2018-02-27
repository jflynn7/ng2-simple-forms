import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss']
})
export class FieldGroupComponent implements OnInit {

  @Input() groupTitle: string;
  @Input() wrapperCssClass: string;

  constructor() { }

  ngOnInit() {
  }

}
