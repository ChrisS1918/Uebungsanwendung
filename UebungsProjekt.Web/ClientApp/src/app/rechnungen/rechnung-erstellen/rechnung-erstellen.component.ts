import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateRechnungDto } from 'src/app/api/rechnungen/create-rechnung-dto';
import { Rechnung } from 'src/app/rechnungen/Rechnung';
import { RechnungService } from '../rechnung.service';

@Component({
  selector: 'app-rechnung-erstellen',
  templateUrl: './rechnung-erstellen.component.html',
  styleUrls: ['./rechnung-erstellen.component.css']
})
export class RechnungErstellenComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;
  constructor(private rechnungService: RechnungService) { }

  rechnung: Rechnung;

  ngOnInit() {
  }


  createInvoice() {
   this.rechnung = this.form.value;
   const dto = new CreateRechnungDto(
    this.rechnung.yourcompany_companyname ? this.rechnung.yourcompany_companyname : undefined,
    this.rechnung.yourcompany_zip ? this.rechnung.yourcompany_zip : undefined,
    this.rechnung.yourcompany_city ? this.rechnung.yourcompany_city : undefined,
    this.rechnung.yourcompany_street ? this.rechnung.yourcompany_street : undefined,
    this.rechnung.yourcompany_phone ? this.rechnung.yourcompany_phone : undefined,
    this.rechnung.yourcompany_fax ? this.rechnung.yourcompany_fax : undefined,
    this.rechnung.yourcompany_url ? this.rechnung.yourcompany_url : undefined,
    this.rechnung.yourcompany_email ? this.rechnung.yourcompany_email : undefined,
    this.rechnung.invoice_no ? this.rechnung.yourcompany_companyname : undefined,
    this.rechnung.billto_name ? this.rechnung.billto_name : undefined,
    this.rechnung.billto_companyname ? this.rechnung.billto_companyname : undefined,
    this.rechnung.billto_customerid ? this.rechnung.billto_customerid : undefined,
    this.rechnung.billto_zip ? this.rechnung.billto_zip : undefined,
    this.rechnung.billto_city ? this.rechnung.billto_city : undefined,
    this.rechnung.billto_street ? this.rechnung.billto_street : undefined,
    this.rechnung.billto_phone ? this.rechnung.billto_phone : undefined,

    //Noch nicht in Form eingefügt:
    this.rechnung.payment_due ? this.rechnung.payment_due : undefined,
    this.rechnung.payment_terms ? this.rechnung.payment_terms : undefined,
    this.rechnung.salesperson_name ? this.rechnung.salesperson_name : undefined,
    this.rechnung.delivery_date ? this.rechnung.delivery_date : undefined,
    this.rechnung.delivery_method ? this.rechnung.delivery_method : undefined,
    this.rechnung.delivery_method_terms ? this.rechnung.delivery_method_terms : undefined,
    this.rechnung.recipient_name ? this.rechnung.recipient_name : undefined,
    this.rechnung.recipient_companyname ? this.rechnung.recipient_companyname : undefined,
    this.rechnung.recipient_zip ? this.rechnung.recipient_zip : undefined,
    this.rechnung.recipient_city ? this.rechnung.recipient_city : undefined,
    this.rechnung.recipient_street ? this.rechnung.recipient_street : undefined,
    this.rechnung.recipient_phone ? this.rechnung.recipient_phone : undefined,
    this.rechnung.item ? this.rechnung.item : undefined,
    this.rechnung.total_discount ? this.rechnung.total_discount : undefined,
    this.rechnung.total_sub ? this.rechnung.total_sub : undefined,
    this.rechnung.total_tax ? this.rechnung.total_tax : undefined,
    this.rechnung.total ? this.rechnung.total : undefined,
     
   )
   this.rechnungService.create(dto).subscribe();
   console.log(dto);
  }

  setOwnInformations() {
    //this.form.setValue({
    //  firmenname: "Test",
    //  straße: "Test",
    //  ort: "Test",
    //  plz: "Test",
    //  fax: "Test",
    //  telefon: "Test",
    //  email: "Test",
    //  webseite: "Test",
    //  rechnungsnummer: "Test"
    //});

    this.form.controls['firmenname'].setValue("Quality Bytes GmbH");
    this.form.controls['straße'].setValue("Brunnenstraße 21");
    this.form.controls['plz'].setValue("53498");
    this.form.controls['ort'].setValue("Bad Breisig");
    this.form.controls['telefon'].setValue("+49 2633 48 99 430");
    this.form.controls['fax'].setValue("");
    this.form.controls['webseite'].setValue("www.qualitybytes.de");
    this.form.controls['email'].setValue("info@qualitybytes.de");
  }

  setTestData() {
    this.form.setValue({
      firmenname: "Quality Bytes GmbH",
      straße: "Brunnenstraße 21",
      ort: "Bad Breisig",
      plz: "53498",
      fax: "",
      telefon: "+49 2633 48 99 430",
      email: "www.qualitybytes.de",
      webseite: "info@qualitybytes.de",
      rechnungsnummer: "RN-1101",
      rechnungsempfänger: "Dirk Bauer",
      firmenname_empfänger: "Höfer System Solutions",
      kundennummer: "10001",
      plz_empfänger: "50667",
      ort_empfänger: "Köln",
      straße_empfänger: "Dingensstraße 94",
      telefon_empfänger: "030340340934"
    });
  }

}
