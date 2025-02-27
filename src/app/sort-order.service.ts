import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortOrderService {

  constructor(private router : Router) { }

  private _sortEvent = new Subject<number>();

  public get sortEvent() : Observable<number> {
    return this._sortEvent.asObservable();
  }

  handleSortRequest(sortType: number) {
    this.router.navigate(["/users"], {queryParams : {"sort" : sortType} });
    this._sortEvent.next(sortType);

  }
}
