import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortOrderService {

  constructor() { }

  @Output()
  sortEvent = new EventEmitter<number>();

  handleSortRequest(sortType: number) {
    this.sortEvent.emit(sortType);
  }
}
