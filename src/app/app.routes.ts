import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { WhoIsInTheBuildingComponent } from './who-is-in-the-building/who-is-in-the-building.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "users", component: UserPageComponent},
    {path : "emergency", component: WhoIsInTheBuildingComponent},
    {path : "emergency/:building", component: WhoIsInTheBuildingComponent},
    {path: "access", component: AccessLogComponent},
    {path : "**", component: PageNotFoundComponent}
];
