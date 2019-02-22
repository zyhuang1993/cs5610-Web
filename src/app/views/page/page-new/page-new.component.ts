import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userId: string;
  websiteId: string;
  name: string;
  title: string;
  pages: Page[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
    });
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
  }

  createNewPage() {
    if (!this.name || !this.title) {
      alert('Please enter the name or title');
    } else {
      this.pageService.createPage(this.userId, new Page(undefined, this.name, this.websiteId, this.title));
      this.backToPages();
    }
  }


  backToPages() {
    this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }

  backToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

}
