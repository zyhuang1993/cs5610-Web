import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites: Website[] = [];
  constructor(private websiteService: WebsiteService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => this.userId = params.userId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    alert(this.userId);
  }


  backToProfile() {
    this.router.navigate(['user', this.userId]);
  }

}