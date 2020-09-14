import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenutzerAnlegenComponent } from './benutzer-verwalten/benutzer-anlegen/benutzer-anlegen.component';
import { AdresseAnlegenComponent } from './adressen-verwalten/adresse-anlegen/adresse-anlegen.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'benutzer-anlegen', component: BenutzerAnlegenComponent},
  { path: 'adresse-anlegen', component: AdresseAnlegenComponent},
  { path: 'start', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
