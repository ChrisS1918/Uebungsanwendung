import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdresseAnlegenComponent } from './adresse-anlegen/adresse-anlegen.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [AdresseAnlegenComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdressenModule { }
