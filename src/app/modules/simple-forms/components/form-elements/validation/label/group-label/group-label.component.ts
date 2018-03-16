import { Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from '../label.component';
import { LabelConfig } from '../../../../../simple-forms.types';

@Component({
  selector: 'app-group-label',
  templateUrl: './group-label.component.html',
  styleUrls: ['./group-label.component.scss']
})
export class GroupLabelComponent extends LabelComponent implements OnInit {

  @Input() groupName: string;
  @Input() labelConfig: LabelConfig;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
