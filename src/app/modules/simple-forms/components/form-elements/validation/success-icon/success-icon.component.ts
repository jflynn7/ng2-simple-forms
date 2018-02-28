import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-icon',
  templateUrl: './success-icon.component.html',
  styleUrls: ['./success-icon.component.scss']
})
export class SuccessIconComponent implements OnInit {

  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
