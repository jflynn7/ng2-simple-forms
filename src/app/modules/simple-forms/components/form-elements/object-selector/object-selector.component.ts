import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'app-object-selector',
  templateUrl: './object-selector.component.html',
  styleUrls: ['./object-selector.component.scss']
})
export class ObjectSelectorComponent extends ElementBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
