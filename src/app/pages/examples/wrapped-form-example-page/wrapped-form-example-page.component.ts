import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var PR: any;

@Component({
  selector: 'app-wrapped-form-example-page',
  templateUrl: './wrapped-form-example-page.component.html',
  styleUrls: ['./wrapped-form-example-page.component.scss']
})
export class WrappedFormExamplePageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

}
