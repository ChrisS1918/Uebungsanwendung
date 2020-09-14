import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenutzerAnlegenComponent } from './benutzer-anlegen/benutzer-anlegen.component';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [BenutzerAnlegenComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class BenutzerModule { }
