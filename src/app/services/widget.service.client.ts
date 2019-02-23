import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
  widgets: Widget[] = [
    { widgetId: '123', widgetType: 'HEADER', pageId: '345', size: 20,
      text: 'London terror attack: Police fired \'unprecedented\' number of rounds', width: undefined, url: undefined},
    { widgetId: '234', widgetType: 'IMAGE', pageId: '345', size: undefined, text: undefined, width: '100%',
      url: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'},
    { widgetId: '345', widgetType: 'YOUTUBE', pageId: '345', size: undefined, text: undefined, width: '100%',
      url: 'https://www.youtube.com/embed/APexI9Zb6iE'},
  ];

  api = {
    createWidget: this.createWidget,
    findWidgetsByPageId: this.findWidgetsByPageId,
    findWidgetById: this.findWidgetById,
    updateWidget: this.updateWidget,
    deleteWidget: this.deleteWidget
  };

  createWidget(pageId, widget) {
    widget.widgetId = this.randomID();
    widget.pageId = pageId;
    this.widgets.push(widget);
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

  private randomID(): string {
    const num = Math.floor(Math.random() * 1000) + 1;
    return num.toString();
  }
}
