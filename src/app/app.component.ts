import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserSortComponent } from './user-sort/user-sort.component';
import { AccessRecordsComponent } from './access-records/access-records.component';
import { EmergencyComponent } from './emergency/emergency.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, UserSortComponent, AccessRecordsComponent,
    EmergencyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bamui';
}
