import { Routes } from '@angular/router';
import { EmergencyComponent } from './emergency/emergency.component';
import { AccessRecordsComponent } from './access-records/access-records.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PnfPageComponent } from './pnf-page/pnf-page.component';

export const routes: Routes = [
    {path: "emergency", component: EmergencyComponent },
    {path: "logs", component: AccessRecordsComponent},
    {path: "users", component: UserPageComponent},
    {path : "", component : HomePageComponent},
    {path: "**", component: PnfPageComponent}
];
