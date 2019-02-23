import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  name: string;
  description: string;
  websites: Website[] = [];

  constructor(private activatedRouter: ActivatedRoute, private websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
    });
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    const curWebsite: Website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = curWebsite.name;
    this.description = curWebsite.description;
  }

  updateCurWebsite() {
    this.websiteService.updateWebsite(this.websiteId, new Website(this.websiteId, this.name, this.userId, this.description));
    this.backToWebsites();
  }

  backToWebsites() {
    this.router.navigate(['user/' + this.userId + '/website']);
  }

  backToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  deleteWeb() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.backToWebsites();
  }
}