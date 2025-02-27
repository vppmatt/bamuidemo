import { Routes } from '@angular/router';
import { EmergencyComponent } from './emergency/emergency.component';
import { AccessRecordsComponent } from './access-records/access-records.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PnfPageComponent } from './pnf-page/pnf-page.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
    {path: "emergency", component: EmergencyComponent },
    {path: "emergency/:building", component: EmergencyComponent },
    {path: "logs", component: AccessRecordsComponent},
    {path: "users", component: UserPageComponent},
    {path : "", component : HomePageComponent},
    {path : "login", component : LoginComponent},
    {path : "user/:id", component: UserEditComponent},
    {path: "**", component: PnfPageComponent}
];
