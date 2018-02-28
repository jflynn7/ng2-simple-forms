import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-icon',
  templateUrl: './error-icon.component.html',
  styleUrls: ['./error-icon.component.scss']
})
export class ErrorIconComponent implements OnInit {

  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
