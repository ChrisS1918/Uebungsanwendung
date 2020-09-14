import { Component, OnInit, ViewChild } from '@angular/core';
import { Benutzer } from '../Benutzer';
import { NgForm } from '@angular/forms';
import { CreateBenutzerDto } from 'src/app/api/benutzer/create-benutzer-dto';
import { BenutzerService } from '../benutzer.service';

@Component({
  selector: 'app-benutzer-anlegen',
  templateUrl: './benutzer-anlegen.component.html',
  styleUrls: ['./benutzer-anlegen.component.scss']
})
export class BenutzerAnlegenComponent implements OnInit {
  benutzer: Benutzer;
  @ViewChild('form', {static: false}) form: NgForm;
  constructor(private benutzerService: BenutzerService) { }

  ngOnInit() {
  }

  submitUser() {
    this.benutzer = this.form.value;
    const dto = new CreateBenutzerDto(
      this.benutzer.vorname ? this.benutzer.vorname : undefined,
      this.benutzer.nachname ? this.benutzer.nachname : undefined,
      this.benutzer.email ? this.benutzer.email : undefined
    )
    this.benutzerService.create(dto);
    console.log(dto);
  }
}
