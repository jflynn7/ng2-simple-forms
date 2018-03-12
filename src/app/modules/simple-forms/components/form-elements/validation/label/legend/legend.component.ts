import { Component, OnInit } from '@angular/core';
import { LabelComponent } from '../label.component';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent extends LabelComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
