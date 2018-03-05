import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-api-reference-page',
  templateUrl: './api-reference-page.component.html',
  styleUrls: ['./api-reference-page.component.scss']
})
export class ApiReferencePageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if (params['object']) {
        const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#${params['object']}`);
        this.pageScrollService.start(pageScrollInstance);
      }
    });
  }

}
