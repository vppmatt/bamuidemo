import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../model/User';
import { NgFor } from '@angular/common';
import { SortOrderService } from '../sort-order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor(private dataService : DataService,
              private sortOrderService: SortOrderService
  ) {}


  users : User[] = [];

  sortEventSubscription? : Subscription;

  ngOnInit(): void {
    this.dataService.getUsers().subscribe( data => this.users = data); 
    this.sortEventSubscription = this.sortOrderService.sortEvent
      .subscribe( sortType => this.sortData(sortType)  );
  }

  ngOnDestroy(): void {
    this.sortEventSubscription?.unsubscribe();
  }

  sortData(sortType: number) {
      this.users.sort( (a,b) => {
        if (sortType === 1) {
          return a.id - b.id;
        } else if (sortType === 2) {
          return a.firstname.localeCompare(b.firstname);
        }
        else {
          return a.surname.localeCompare(b.surname);
        }
      } )
  }

}
