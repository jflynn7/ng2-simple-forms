import { Component, Injector, Input, OnInit } from '@angular/core';
import { Link, LinkComponent } from '../link.component';
import { PageScrollService } from 'ngx-page-scroll';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-link-with-sub',
  templateUrl: './link-with-sub.component.html',
  styleUrls: ['./../link.component.scss', './link-with-sub.component.scss']
})
export class LinkWithSubComponent extends LinkComponent implements OnInit {

  @Input() mainLink: Link;
  @Input() subLinks: Link[];

  constructor(private injector: Injector) {
    super(injector.get(PageScrollService), injector.get(DOCUMENT), injector.get(Router));
  }

  ngOnInit() {
  }

}
