import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;


  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
    });
  }

  backToProfile() {
    this.router.navigate(['user', this.userId]);
  }

  backToWidgets() {
    this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + 'widget']);
  }

}
