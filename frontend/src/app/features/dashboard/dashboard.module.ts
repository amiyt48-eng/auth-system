import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

import { FormsModule } from '@angular/forms';

@NgModule({

imports:[
CommonModule,
FormsModule,
DashboardRoutingModule,
DashboardComponent,
UsersComponent,
SidebarComponent
]

})

export class DashboardModule{}