import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {Router} from '@angular/router';

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
  title: string;

  constructor(private pageService: PageService, private router: Router) { }

  ngOnInit() {
  }

  updateCurPage() {
    this.pageService.updatePage(this.pageId, new Page(this.pageId, this.name, this.websiteId, this.title));
    this.backToPages();
  }

  backToPages() {
    this.router.navigate(['user/' + this.userId + '/website']);
  }

  backToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  deletePage() {
    this.pageService.deletePage(this.websiteId);
    this.backToPages();
  }

}
