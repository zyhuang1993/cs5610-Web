import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
  widgets: Widget[] = [
    { widgetId: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', width: undefined, url: undefined},
    { widgetId: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: undefined, url: undefined},
    { widgetId: '345', widgetType: 'IMAGE', pageId: '321', size: undefined, text: undefined, width: '100%',
      url: 'http://lorempixel.com/400/200/'},
    { widgetId: '456', widgetType: 'HTML', pageId: '321', size: undefined, text: '<p>Lorem ipsum</p>', width: undefined, url: undefined},
    { widgetId: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: undefined, url: undefined},
    { widgetId: '678', widgetType: 'YOUTUBE', pageId: '321', size: undefined, text: undefined, width: '100%',
      url: 'https://youtu.be/AM2Ivdi9c4E'},
    { widgetId: '789', widgetType: 'HTML', pageId: '321', size: undefined, text: '<p>Lorem ipsum</p>', width: undefined, url: undefined}
  ];

  api = {
    createWidget: this.createWidget,
    findWidgetByPageId: this.findWidgetsByPageId,
    findWidgetById: this.findWidgetById,
    updateWidget: this.updateWidget,
    deleteWidget: this.deleteWidget
  };

  createWidget(pageId, widget) {
    this.widgets.push(new Widget(widget.widgetId, widget.widgetType, pageId, widget.size, widget.text, widget.width, widget.url));
  }

  findWidgetsByPageId(pageId) {
    return this.widgets.filter((widget) => {
      return widget.pageId === pageId;
    });
  }

  findWidgetById(widgetId) {
    return this.widgets.find((widget) => {
      return widget.widgetId === widgetId;
    });
  }

  updateWidget(widgetId, widget) {
    for ( const i in this.widgets ) {
      if ( this.widgets[i].widgetId === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }

      }
    }
    return false;
  }

  deleteWidget(widgetId) {
  for (const i in this.widgets) {
    if (this.widgets[i].widgetId === widgetId) {
      const j = +i;
      this.widgets.splice(j, 1);
      break;
    }
  }
  }
}
