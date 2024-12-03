import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-sort',
  standalone: true,
  imports: [],
  templateUrl: './user-sort.component.html',
  styleUrl: './user-sort.component.css'
})
export class UserSortComponent {

  @Output()
  sortEvent : EventEmitter<number> = new EventEmitter<number>();

  handleClick(sortType : number) {
    this.sortEvent.emit(sortType);
  }

}
