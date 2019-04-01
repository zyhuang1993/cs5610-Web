import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  website: Website;
  websites: Website[] = [];

  constructor(private userService: UserService, private router: Router, private websiteService: WebsiteService,
              private activatedRouter: ActivatedRoute) {
    this.website = new Website( undefined, undefined, undefined);
  }

  createNewWeb() {
    if (!this.website.name || !this.website.description) {
      alert('Please enter the name or description');
    } else {
      this.websiteService.createWebsite(this.userId, new Website(this.website.name, undefined, this.website.description))
        .subscribe((data) => {
          this.website = data;
          this.router.navigate(['user/' + this.userId + '/website']);
        });
    }
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params.userId;
      this.userService.findUserById(this.userId).subscribe((user) => {
        this.websites = user.websites;
      });
    });
  }

}
