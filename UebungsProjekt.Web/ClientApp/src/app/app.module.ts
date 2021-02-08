import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenutzerModule } from './benutzer-verwalten/benutzer.module';
import { HttpClientModule } from '@angular/common/http';
import { AdressenModule } from './adressen-verwalten/adressen.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './info/info.component';
import { ReadKundenComponent } from './kunden/read-kunden/read-kunden.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    ReadKundenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BenutzerModule,
    AdressenModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
