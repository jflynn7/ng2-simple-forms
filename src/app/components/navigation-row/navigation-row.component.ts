import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-row',
  templateUrl: './navigation-row.component.html',
  styleUrls: ['./navigation-row.component.scss']
})
export class NavigationRowComponent implements OnInit {

  @Input() blurb: string;
  @Input() nextRoute: { label: string, route: string};
  @Input() prevRoute: { label: string, route: string};

  constructor() { }

  ngOnInit() {
  }

}
