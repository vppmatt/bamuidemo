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

  whoIsInTheBuildingNow(building : string) {
      const today = new Date().toISOString().split("T")[0].replace("/", "");  // 20250226
      return this.getAccessRecords(today)
        .pipe(
            map(
              allRecs => allRecs.filter(it => it.building === building)
            )
        )
  }
  
  getBuildings() : Observable<Building[]> {
      return this.http.get<Building[]>(`${this.url}/api/building`)
  }


}

type ServerAccessRecord = AccessRecord & {
  building: Building,
}