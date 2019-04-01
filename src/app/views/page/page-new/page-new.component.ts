import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userId: string;
  websiteId: string;
  pages: Page[] = [];
  newPage: Page;

  constructor(private webService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute,
              private pageService: PageService) {
    this.newPage = new Page( undefined, undefined, undefined);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.webService.findWebsiteById(this.websiteId).subscribe((website) => {
        this.pages = website.pages;
      });
    });
  }

  createNewPage() {
    if (!this.newPage.name || !this.newPage.description) {
      alert('Please enter the name or description');
    } else {
      this.pageService.createPage(this.websiteId, this.newPage).subscribe((data: Page) => {
        this.newPage = data;
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
      });
    }
  }

}
