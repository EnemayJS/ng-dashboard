import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardJumbotronComponent } from './dashboard-jumbotron/dashboard-jumbotron.component';
import { DashboardJoblistComponent } from './dashboard-joblist/dashboard-joblist.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    DashboardJumbotronComponent,
    DashboardJoblistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
