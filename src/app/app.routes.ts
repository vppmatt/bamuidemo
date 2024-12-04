import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { WhoIsInTheBuildingComponent } from './who-is-in-the-building/who-is-in-the-building.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserBulkEditComponent } from './user-bulk-edit/user-bulk-edit.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "users", component: UserPageComponent},
    {path : "users-edit", component: UserBulkEditComponent},
    {path : "users/:id", component: UserEditComponent},
    {path : "emergency", component: WhoIsInTheBuildingComponent},
    {path : "emergency/:building", component: WhoIsInTheBuildingComponent},
    {path: "access", component: AccessLogComponent},
    {path: "login", component: LoginComponent},
    {path : "**", component: PageNotFoundComponent}
];
