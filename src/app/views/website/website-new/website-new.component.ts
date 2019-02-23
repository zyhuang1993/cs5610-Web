import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') newWebForm: NgForm;

  userId: string;
  name: string;
  description: string;
  websites: Website[] = [];

  constructor(private router: Router, private websiteService: WebsiteService, private activatedRouter: ActivatedRoute) {
  }

  createNewWeb() {
    if (!this.name || !this.description) {
      alert('Please enter the name or description');
    } else {
      this.websiteService.createWebsite(this.userId, new Website(undefined, this.name, undefined, this.description));
      this.backToWebsites();
    }
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params.userId;
    });
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  backToWebsites() {
    this.router.navigate(['user/' + this.userId + '/website']);
  }

  backToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

}
