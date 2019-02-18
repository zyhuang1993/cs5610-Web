export class Widget {
  widgetId: string;
  widgetType: string;
  pageId: string;
  size: number;
  text: string;
  width: string;
  url: string;

  constructor(widgetId, type, pageId, size = 1, text = 'text', width = '100%', url = 'url') {
    this.widgetId = widgetId;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
  }
}
