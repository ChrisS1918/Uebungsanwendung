import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateRechnungDto, RootObject } from 'src/app/api/rechnungen/create-rechnung-dto';
import { reportingcloudConfiguration } from 'src/app/httpConfigurations';
import { Rechnung } from 'src/app/rechnungen/Rechnung';
import { RechnungService } from '../rechnung.service';

@Component({
  selector: 'app-rechnung-erstellen',
  templateUrl: './rechnung-erstellen.component.html',
  styleUrls: ['./rechnung-erstellen.component.css']
})
export class RechnungErstellenComponent implements OnInit {
  @ViewChild('form', { static: false }) form: NgForm;
  config: reportingcloudConfiguration
  rechnung: Rechnung;
  rechnungPDF;
  dto;
  isLoading = false;

  myDate: Date;
  myUtcDate;



  constructor(private rechnungService: RechnungService) { }
  ngOnInit() {
    this.config = new reportingcloudConfiguration();
  }

  createInvoice() {
    this.isLoading = true;
    this.dto = new RootObject();
    this.dto.mergeData = Array<CreateRechnungDto>();

    this.rechnung = this.form.value;
    this.dto.mergeData.push(new CreateRechnungDto(
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
      //Noch nicht in Form eingefügt:

      this.rechnung.item ? this.rechnung.item : undefined,
      this.rechnung.total_discount ? this.rechnung.total_discount : undefined,
      this.rechnung.total_sub ? this.rechnung.total_sub : undefined,
      this.rechnung.total_tax ? this.rechnung.total_tax : undefined,
      this.rechnung.total ? this.rechnung.total : undefined,

    ))
    this.config.postedData = this.dto;
    console.log(this.dto);
    this.rechnungService.createInvoice(this.config.url, this.config.postedData, this.config.httpOptions).subscribe(r => {this.rechnungPDF = r; this.isLoading = false;});
  }

  setOwnInformations() {
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
      yourcompany_companyname: "Quality Bytes GmbH",
      yourcompany_street: "Brunnenstraße 21",
      yourcompany_city: "Bad Breisig",
      yourcompany_zip: "53498",
      yourcompany_fax: "",
      yourcompany_phone: "+49 2633 48 99 430",
      yourcompany_email: "www.qualitybytes.de",
      yourcompany_url: "info@qualitybytes.de",
      invoice_no: "RN-1101",
      billto_name: "Dirk Bauer",
      billto_companyname: "Höfer System Solutions",
      billto_customerid: "10001",
      billto_zip: "50667",
      billto_city: "Köln",
      billto_street: "Dingensstraße 94",
      billto_phone: "030340340934",

      recipient_name: "Dirk Bauer",
      recipient_companyname: "Höfer System Solutions",
      recipient_zip: "50667",
      recipient_city: "Köln",
      recipient_street: "Dingensstraße 94",
      recipient_phone: "030340340934"
    });

  }


  downloadPdf() {
    const source = `data:application/pdf;base64,${this.rechnungPDF}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = "Rechnung" + formatDate(new Date(), 'dd/MM/yyyy HH:mm:ss', 'en', '+0200');
    link.click();
  }

}
