import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class WidgetService {
  constructor(private http: HttpClient) {}
  baseurl = environment.baseUrl;

  createWidget(pageId, widget): Observable<Widget> {
    const url = this.baseurl + '/api/page/' + pageId + '/widget';
    return this.http.post<Widget>(url, widget);
  }

  findWidgetsByPageId(pageId): Observable<Widget[]> {
    const url = this.baseurl + '/api/page/' + pageId + '/widget';
    return this.http.get<Widget[]>(url);
  }

  findWidgetById(widgetId): Observable<Widget> {
    const url = this.baseurl + '/api/widget/' + widgetId;
    return this.http.get<Widget>(url);

  }

  updateWidget(widgetId, widget): Observable<Widget> {
    const url = this.baseurl + '/api/widget/' + widgetId;
    return this.http.put<Widget>(url, widget);
  }

  deleteWidget(widgetId): Observable<Widget[]> {
    const url = this.baseurl + '/api/widget/' + widgetId;
    return this.http.delete<Widget[]>(url);
  }

  reorderWidgets(startIndex, endIndex, pageId) {

    const url = this.baseurl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this.http.get(url);
  }

  uploadImage(file: any) {
    return this.http.post(this.baseurl + '/api/uploads', file);
  }

}
