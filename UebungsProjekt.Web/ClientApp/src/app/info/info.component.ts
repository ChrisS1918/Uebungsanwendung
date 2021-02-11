import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../kunden/Kunde';
import { InfoService } from './info.service';
import { SystemInfo } from './SystemInfo';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private readonly infoService: InfoService, private readonly http: HttpClient) { }
  sysInfo: Observable<SystemInfo>;
  result: Customer[];

  
//fastBill request informations
  username = 'fastTest@tempr.email';
  passwordAsApiKey = 'ac6c60f49f195c1f0d91dae6d1bd02790GFHWcg3MEg0uFiGHdkgohxrlY9FjokL'
  url = 'https://my.fastbill.com/api/1.0/api.php?OFFSET=CUSTOMERS&=';
  postedData = `
  <FBAPI>
  <SERVICE>customer.get</SERVICE>
  </FBAPI>`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/xml', //<- To SEND XML
      'Accept':  'application/xml',       //<- To ask for XML
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.passwordAsApiKey)
    }),
    responseType: "text"
  };



  ngOnInit() {
    this.sysInfo = this.infoService.getInfo();
    this.infoService.getCustomers(this.url, this.postedData, this.httpOptions).subscribe(r => console.log(this.result = r));
  }


}
