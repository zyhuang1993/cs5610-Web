import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;

  text: string;
  size: number;
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
      this.size = widget.size;
      this.isNewWidget = false;
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
    if (!this.text || !this.size) {
      alert('Please enter text and size.');
    } else {
      this.widgetService.createWidget(this.pageId, new Widget(undefined, 'HEADER', undefined, this.size, this.text, undefined, undefined));
      this.backToWidgets();
    }
  }

  private updateCurWidget() {
    if (!this.text || !this.size) {
      alert('Please enter text and size.');
    } else {
      const widget: Widget = this.widgetService.findWidgetById(this.widgetId);
      widget.text = this.text;
      widget.size = this.size;
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

  backToProfile() {
    this.router.navigate(['user/' + this.userId]);
  }



}
