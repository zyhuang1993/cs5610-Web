import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

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

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router,
              private domSanitizer: DomSanitizer, private pageService: PageService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.pageService.findPageById(this.pageId).subscribe((page) => {
        this.widgets = page.widgets;
        console.log(this.widgets);
      });
    });
  }
      /*this.widgetService.findWidgetsByPageId(this.pageId).subscribe((data) => {
        console.log(data);
        this.widgets = data;
      });
    });
  }*/


  checkUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

   reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId).subscribe((data) => {
    });
   }

}
