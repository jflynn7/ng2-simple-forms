import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LabelComponent } from '../label.component';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent extends LabelComponent implements OnInit, AfterViewInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.labelConfig.modifier = 'legend';
  }
}
