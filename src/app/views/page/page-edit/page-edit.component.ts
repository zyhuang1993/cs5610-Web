import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;

  name: string;
  description: string;
  pages: Page[] = [];

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
      const curPage = this.pageService.findPageById(this.pageId);
      this.name = curPage.name;
      this.description = curPage.description;
    });
  }

  updateCurPage() {
    this.pageService.updatePage(this.pageId, new Page(this.pageId, this.name, this.websiteId, this.description));
    this.backToPages();
  }

  backToPages() {
    this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }


  deletePage() {
    this.pageService.deletePage(this.pageId);
    this.backToPages();
  }

}
