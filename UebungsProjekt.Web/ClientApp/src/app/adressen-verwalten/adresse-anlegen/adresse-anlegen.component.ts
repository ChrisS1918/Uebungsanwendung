import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateAdresseDto } from 'src/app/api/adresse/create-adresse-dto';
import { Adresse } from '../Adresse';
import { AdressenService } from '../adressen.service';

@Component({
  selector: 'app-adresse-anlegen',
  templateUrl: './adresse-anlegen.component.html',
  styleUrls: ['./adresse-anlegen.component.scss']
})
export class AdresseAnlegenComponent implements OnInit {
  adresse: Adresse;
  @ViewChild('form', {static: false}) form: NgForm;
  constructor(private adressenService: AdressenService) { }

  ngOnInit() {
  }

  submitAdress() {
    this.adresse = this.form.value;
    const dto = new CreateAdresseDto(
      this.adresse.ort ? this.adresse.ort : undefined,
      this.adresse.plz ? this.adresse.plz : undefined,
      this.adresse.straße ? this.adresse.straße : undefined,
      this.adresse.nummer ? this.adresse.nummer : undefined
    )
    this.adressenService.create(dto);
    console.log(dto);
  }

}
