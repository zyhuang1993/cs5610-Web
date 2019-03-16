import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class WebsiteService {

  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createWebsite(userId, website): Observable<Website> {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post<Website>(url, website);
  }

  findWebsitesByUser(userId: string): Observable<Website[]> {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get<Website[]>(url);
  }

  findWebsiteById(websiteId): Observable<Website> {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get<Website>(url);
  }

  updateWebsite(websiteId, website): Observable<Website> {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put<Website>(url, website);
  }

  deleteWebsite(websiteId): Observable<Website[]> {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete<Website[]>(url);
  }


}
