import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;

  text: string;
  width: string;
  url: string;
  isNewWidget: boolean;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.widgetId = params.widgetId;
    });
    const widget: Widget = this.widgetService.findWidgetById(this.widgetId);
    if (widget) {
      this.text = widget.text;
      this.width = widget.width;
      this.isNewWidget = false;
      this.url = widget.url;
    } else {
      this.isNewWidget = true;
    }
  }

  widgetOperation() {
    if (this.isNewWidget) {
      this.createNewWidget();
    } else {
      this.updateCurWidget();
    }
  }

  private createNewWidget() {
    if (!this.text || !this.width || !this.url) {
      alert('Please enter the youtube information.');
    } else {
      this.widgetService.createWidget(this.pageId, new Widget(undefined, 'YOUTUBE', undefined, undefined, this.text, this.width, this.url));
      this.backToWidgets();
    }
  }

  private updateCurWidget() {
    if (!this.text || !this.width || !this.url) {
      alert('Please enter the youtube information.');
    } else {
      const widget: Widget = this.widgetService.findWidgetById(this.widgetId);
      widget.text = this.text;
      widget.width = this.width;
      widget.url = this.url;
      this.widgetService.updateWidget(this.widgetId, widget);
      this.backToWidgets();
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    this.backToWidgets();
  }

  backToWidgets() {
    this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
  }
}
