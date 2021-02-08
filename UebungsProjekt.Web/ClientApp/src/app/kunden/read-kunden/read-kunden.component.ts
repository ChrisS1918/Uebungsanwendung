import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { KundenService } from '../kunden.service';

@Component({
  selector: 'app-read-kunden',
  templateUrl: './read-kunden.component.html',
  styleUrls: ['./read-kunden.component.css']
})
export class ReadKundenComponent implements OnInit {

  constructor(private readonly kundenService: KundenService) { }
  kunden: Customer[];
  displayedColumns: string[] = ['CUSTOMER_ID', 'ORGANIZATION', 'ADDRESS', 'CITY', 'ZIPCODE', 'COUNTRY_CODE'];

  //fastBill request informations
  username = 'fastTest@tempr.email';
  passwordAsApiKey = 'ac6c60f49f195c1f0d91dae6d1bd02790GFHWcg3MEg0uFiGHdkgohxrlY9FjokL'
  url = 'https://my.fastbill.com/api/1.0/api.php?OFFSET=CUSTOMERS&=';
  postedData = `
  {
    "SERVICE": "customer.get" 
  }`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json', //<- To SEND XML
      'Accept':  'application/json',       //<- To ask for XML
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.passwordAsApiKey)
    })
  };

  ngOnInit() {
    this.kundenService.getCustomers(this.url, this.postedData, this.httpOptions).subscribe(r => console.log(this.kunden = r));
  }

}
