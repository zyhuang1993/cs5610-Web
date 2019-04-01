import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  curWebsite: Website;
  websites: Website[] = [];

  constructor(private userService: UserService, private activatedRouter: ActivatedRoute,
              private websiteService: WebsiteService, private router: Router) {
    this.curWebsite = new Website( undefined, undefined, undefined);
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.userService.findUserById(this.userId).subscribe((user) => {
        this.websites = user.websites;
      });
      this.websiteService.findWebsiteById(this.websiteId).subscribe((data: Website) => {
        this.curWebsite = data;
      });
    });
  }

  updateCurWebsite() {
    if (!this.curWebsite.name || !this.curWebsite.description) {
      alert('Please make sure the input area is not blank');
    } else {
      this.websiteService.updateWebsite(this.websiteId, this.curWebsite)
                          .subscribe((data: Website) => {
                            this.router.navigate(['user/' + this.userId + '/website']);
                          });
    }
  }

  deleteWeb() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe(() => {
      alert('delete successfully');
      this.router.navigate(['user/' + this.userId + '/website']);
    });
  }
}
