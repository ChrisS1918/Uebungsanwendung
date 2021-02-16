import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenutzerAnlegenComponent } from './benutzer-verwalten/benutzer-anlegen/benutzer-anlegen.component';
import { AdresseAnlegenComponent } from './adressen-verwalten/adresse-anlegen/adresse-anlegen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { ReadKundenComponent } from './kunden/read-kunden/read-kunden.component';
import { RechnungErstellenComponent } from './rechnungen/rechnung-erstellen/rechnung-erstellen.component';


const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'benutzer-anlegen', component: BenutzerAnlegenComponent},
  { path: 'adresse-anlegen', component: AdresseAnlegenComponent},
  { path: 'start', component: DashboardComponent},
  { path: 'info', component: InfoComponent},
  { path: 'kunden', component: ReadKundenComponent},
  { path: 'rechnungen', component: RechnungErstellenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
