import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;

  widgets: Widget[] = [];

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
    });
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    console.log(this.widgets);
  }

  backToProfile() {
    this.router.navigate(['user', this.userId]);
  }

  backToPages() {
    this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }


  getUrl(url: string) {
    alert(url);
    return url;
  }

}
