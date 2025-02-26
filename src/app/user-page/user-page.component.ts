import { Component } from '@angular/core';
import { UserSortComponent } from '../user-sort/user-sort.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserSortComponent, UserListComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
