import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { map, Observable, Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { AccessRecord } from '../model/AccessRecord';
import { Building } from '../model/Building';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  url = environment.serverUrl;

  getUsers() : Observable<Array<User>> {
    return this.http.get<User[]>(`${this.url}/api/user`);
  }

  getAccessRecords(date: string) : Observable<Array<AccessRecord>> {
      return this.http
        .get<ServerAccessRecord[]>(`${this.url}/api/logs/${date}?all=true`)
        .pipe( 
          map( fullArray  => 
              fullArray.map(rec => ({...rec, building: rec.building.name  })  )
              ) 
        )
  }
  
}

type ServerAccessRecord = AccessRecord & {
  building: Building,
}