import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortOrderService {

  constructor() { }

  private _sortEvent = new Subject<number>();

  public get sortEvent() : Observable<number> {
    return this._sortEvent.asObservable();
  }

  handleSortRequest(sortType: number) {
    this._sortEvent.next(sortType);

  }
}
