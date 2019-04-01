import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  createUser(user: User): Observable<any> {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user);
  }

  findUserById(userId: string): Observable<any> {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get<any>(url);
  }


  findUserByCredentials(username: string, password: string): Observable<any> {
    const params = new HttpParams({
      fromString: `username=${username}&password=${password}`
    });
    const url = this.baseUrl + '/api/user';

    return this.http.get<any>(url, {params});
  }

  updateUser(userId, user): Observable<any> {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user);
  }

  deleteUser(userId: string): Observable<any> {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url);
  }
}
