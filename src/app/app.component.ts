import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPageComponent } from './users/user-page/user-page.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { WhoIsInTheBuildingComponent } from './who-is-in-the-building/who-is-in-the-building.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserPageComponent, AccessLogComponent, WhoIsInTheBuildingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bamui';
}
