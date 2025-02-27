import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../model/User';
import { NgFor, NgIf } from '@angular/common';
import { SortOrderService } from '../sort-order.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor(private dataService : DataService,
              private sortOrderService: SortOrderService,
              private route : ActivatedRoute
  ) {}

  message = "";
  messageClass = "d-none";

  users : User[] = [];

  sortEventSubscription? : Subscription;

  getSortFromUrl() {
    this.route.queryParams.subscribe( params => {
      if(params["sort"]) {
        this.sortData(+params["sort"]);
      }
    })
  }

  ngOnInit(): void {
    this.message = "loading data please wait...";
    this.messageClass = "alert alert-info"
    this.dataService.getUsers().subscribe( {
      next : data => {this.users = data;
                      this.getSortFromUrl();
                      this.messageClass="d-none";
                      },
      error: err => {this.message = err.message;
                     this.messageClass="alert alert-danger"
                     },
      complete: () => {}
    }); 




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
