import 'rxjs/Rx';
import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class PageService {

  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  createPage( websiteId: string, page: Page): Observable<Page> {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post<Page>(url, page);
  }

  findPagesByWebsiteId(websiteId): Observable<Page[]> {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get<Page[]>(url);
  }

  findPageById(pageId): Observable<Page> {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get<Page>(url);
  }

  updatePage(pageId, page): Observable<Page> {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put<Page>(url, page);
  }

  deletePage(pageId): Observable<Page[]> {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete<Page[]>(url);
  }
}
