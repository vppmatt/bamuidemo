import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { UserSortComponent } from '../user-sort/user-sort.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserListComponent, UserSortComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild(UserSortComponent)
  userSortComponent! : UserSortComponent;

  sortSubscription!: Subscription;

  sortOrder: number = 1;

  ngAfterViewInit(): void {
      this.sortSubscription = this.userSortComponent.sortEvent
      .subscribe( data => this.sortOrder = data);
  }

  ngOnDestroy(): void {
      this.sortSubscription.unsubscribe();
  }

}
