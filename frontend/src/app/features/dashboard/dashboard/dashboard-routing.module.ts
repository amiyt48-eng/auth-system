import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../users/users.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { AuthGuard } from '../../../core/guards/auth.guard';

const routes:Routes=[

{
path:'',
component:SidebarComponent,
canActivate:[AuthGuard],
children:[

{path:'',component:DashboardComponent},

{path:'users',component:UsersComponent}

]
}

]

@NgModule({

imports:[RouterModule.forChild(routes)],
exports:[RouterModule]

})

export class DashboardRoutingModule{}