import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getUsers() {
    const observable : Observable<User[]> = 
      this.http.get<User[]>("http://localhost:8080/api/user");
      console.log(observable);
  }
}
