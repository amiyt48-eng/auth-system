import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../users/users.component';

import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';

import { AuthGuard } from '../../../core/guards/auth.guard';

export const DASHBOARD_ROUTES: Routes = [

{
path:'',
component:SidebarComponent,
canActivate:[AuthGuard],
children:[

{path:'',component:DashboardComponent},

{path:'users',component:UsersComponent}

]
}

];