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

  curPage: Page;
  pages: Page[] = [];

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.curPage = new Page( undefined, undefined, undefined);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.pageService.findPagesByWebsiteId(this.websiteId).subscribe((data: Page[]) => {
        this.pages = data;
      });
      this.pageService.findPageById(this.pageId).subscribe((data: Page) => {
        this.curPage = data;
      });
    });
  }

  updateCurPage() {
    if (!this.curPage.name || !this.curPage.description) {
      alert('Please enter the name or description');
    } else {
      this.pageService.updatePage(this.pageId, this.curPage).subscribe((data: Page) => {
        this.curPage = data;
        this.backToPages();
      });
    }
  }

  backToPages() {
    this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }


  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(() => {
      this.backToPages();
    });
  }

}
