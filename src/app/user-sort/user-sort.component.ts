import { Component } from '@angular/core';
import { SortOrderService } from '../sort-order.service';

@Component({
  selector: 'app-user-sort',
  standalone: true,
  imports: [],
  templateUrl: './user-sort.component.html',
  styleUrl: './user-sort.component.css'
})
export class UserSortComponent {

  constructor(public sortOrderService : SortOrderService) {}

  sortType = 1;

  handleClick(sort: number) {
    this.sortType = sort;
    this.sortOrderService.handleSortRequest(sort);
  }

}
