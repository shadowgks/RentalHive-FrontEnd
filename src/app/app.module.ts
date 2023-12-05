import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { provideRouter } from '@angular/router';
import configRoute from './routes.config';
import { DashboardHomeComponent } from './dashboard.home/dashboard.home.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideRouter(configRoute)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
