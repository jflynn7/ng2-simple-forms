import { Component, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() theme: string;
  @Input() label: string;
  @Input() route: string;
  @Input() anchor: string;
  @Input() additionalLabel: string;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private router: Router) { }

  ngOnInit() {
  }

  clickLink(link?: Link) {
    let clickedLink: Link = {
      label: this.label,
      route: this.route,
      anchor: this.anchor
    };

    if (link) {
      clickedLink = link;
    }

    if (clickedLink.route) {
      this.router.navigate([clickedLink.route]);
    } else {
      const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#${clickedLink.anchor}`);
      this.pageScrollService.start(pageScrollInstance);
    }
  }
}

export interface Link {
  label?: string;
  route?: string;
  anchor?: string;
}

