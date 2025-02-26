import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  url = environment.serverUrl;

  getUsers() : Observable<Array<User>> {
    return this.http.get<User[]>(`${this.url}/api/user`);
  }
}
