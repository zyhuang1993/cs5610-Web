import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pages: Page[] = [];

  constructor(private router: Router, private pageService: PageService, private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
    });
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
  }

  backToProfile() {
    this.router.navigate(['user', this.userId]);
  }

  backToWebsites() {
    this.router.navigate(['user/' + this.userId + '/website']);
  }
}
