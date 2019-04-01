import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pages: Page[] = [];

  constructor(private webService: WebsiteService, private router: Router, private pageService: PageService,
              private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.webService.findWebsiteById(this.websiteId).subscribe((website) => {
        this.pages = website.pages;
      });
      /*this.pageService.findPagesByWebsiteId(this.websiteId).subscribe((data) => {
        this.pages = data;
      });*/
    });
  }

}
