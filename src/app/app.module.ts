import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ChartsModule} from 'ng2-charts'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PageComponent } from './component/page/page.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InputComponent } from './component/common/input/input.component';
import { NavbarLeftComponent } from './component/navbar-left/navbar-left.component';

import {FormsModule} from '@angular/forms'
import { FullCalendarModule } from '@fullcalendar/angular'

// material
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';
import { LineChartComponent } from './component/common/line-chart/line-chart.component';
import { BarChartComponent } from './component/common/bar-chart/bar-chart.component';
import { PieChartComponent } from './component/common/pie-chart/pie-chart.component';
import { NavbarItemComponent } from './component/navbar-left/navbar-item/navbar-item.component';
import { CalendarComponent } from './component/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    PageComponent,
    LoginComponent,
    ForgotComponent,
    NavbarComponent,
    InputComponent,
    NavbarLeftComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    NavbarItemComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ChartsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
