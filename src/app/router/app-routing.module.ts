import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from '../component/page/page.component'
import { LoginComponent } from '../component/login/login.component'
import { DashboardComponent } from '../component/dashboard/dashboard.component'
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component'
import { ForgotComponent } from '../component/forgot/forgot.component';
import {CalendarComponent} from '../component/calendar/calendar.component'
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'page',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
