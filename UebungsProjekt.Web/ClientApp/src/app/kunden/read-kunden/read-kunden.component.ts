import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Kunde';
import { KundenService } from '../kunden.service';
import { CreateKundenDto } from 'src/app/api/kunden/create-kunden-dto';

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
      'Content-Type': 'application/json', //<- To SEND XML
      'Accept': 'application/json',       //<- To ask for XML
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.passwordAsApiKey)
    })
  };

  dtos: CreateKundenDto[];

  ngOnInit() {
    console.log("GetCustomers:");
    this.kundenService.getCustomers(this.url, this.postedData, this.httpOptions).subscribe(r => console.log(this.kunden = r));
  }

  saveCustomers() {
    this.dtos = Array<CreateKundenDto>();
    for (let kunde in this.kunden) {
      
      this.dtos.push(new CreateKundenDto(
        this.kunden[kunde].CUSTOMER_ID ? this.kunden[kunde].CUSTOMER_ID : undefined,
        this.kunden[kunde].CUSTOMER_NUMBER ? this.kunden[kunde].CUSTOMER_NUMBER : undefined,
        this.kunden[kunde].DAYS_FOR_PAYMENT ? this.kunden[kunde].DAYS_FOR_PAYMENT : undefined,
        this.kunden[kunde].CREATED ? this.kunden[kunde].CREATED : undefined,
        this.kunden[kunde].PAYMENT_TYPE ? this.kunden[kunde].PAYMENT_TYPE : undefined,
        this.kunden[kunde].BANK_NAME ? this.kunden[kunde].BANK_NAME : undefined,
        this.kunden[kunde].BANK_ACCOUNT_NUMBER ? this.kunden[kunde].BANK_ACCOUNT_NUMBER : undefined,
        this.kunden[kunde].BANK_CODE ? this.kunden[kunde].BANK_CODE : undefined,
        this.kunden[kunde].BANK_ACCOUNT_OWNER ? this.kunden[kunde].BANK_ACCOUNT_OWNER : undefined,
        this.kunden[kunde].BANK_IBAN ? this.kunden[kunde].BANK_IBAN : undefined,
        this.kunden[kunde].BANK_BIC ? this.kunden[kunde].BANK_BIC : undefined,
        this.kunden[kunde].BANK_ACCOUNT_MANDATE_REFERENCE ? this.kunden[kunde].BANK_ACCOUNT_MANDATE_REFERENCE : undefined,
        this.kunden[kunde].SHOW_PAYMENT_NOTICE ? this.kunden[kunde].SHOW_PAYMENT_NOTICE : undefined,
        this.kunden[kunde].CUSTOMER_ACCOUNT ? this.kunden[kunde].CUSTOMER_ACCOUNT : undefined,
        this.kunden[kunde].CUSTOMER_TYPE ? this.kunden[kunde].CUSTOMER_TYPE : undefined,
        this.kunden[kunde].TOP ? this.kunden[kunde].TOP : undefined,
        this.kunden[kunde].NEWSLETTER_OPTIN ? this.kunden[kunde].NEWSLETTER_OPTIN : undefined,
        this.kunden[kunde].ORGANIZATION ? this.kunden[kunde].ORGANIZATION : undefined,
        this.kunden[kunde].POSITION ? this.kunden[kunde].POSITION : undefined,
        this.kunden[kunde].ACADEMIC_DEGREE ? this.kunden[kunde].ACADEMIC_DEGREE : undefined,
        this.kunden[kunde].SALUTATION ? this.kunden[kunde].SALUTATION : undefined,
        this.kunden[kunde].FIRST_NAME ? this.kunden[kunde].FIRST_NAME : undefined,
        this.kunden[kunde].LAST_NAME ? this.kunden[kunde].LAST_NAME : undefined,
        this.kunden[kunde].ADDRESS ? this.kunden[kunde].ADDRESS : undefined,
        this.kunden[kunde].ADDRESS_2 ? this.kunden[kunde].ADDRESS_2 : undefined,
        this.kunden[kunde].ZIPCODE ? this.kunden[kunde].ZIPCODE : undefined,
        this.kunden[kunde].CITY ? this.kunden[kunde].CITY : undefined,
        this.kunden[kunde].COUNTRY_CODE ? this.kunden[kunde].COUNTRY_CODE : undefined,
        this.kunden[kunde].SECONDARY_ADDRESS ? this.kunden[kunde].SECONDARY_ADDRESS : undefined,
        this.kunden[kunde].PHONE ? this.kunden[kunde].PHONE : undefined,
        this.kunden[kunde].PHONE_2 ? this.kunden[kunde].PHONE_2 : undefined,
        this.kunden[kunde].FAX ? this.kunden[kunde].FAX : undefined,
        this.kunden[kunde].MOBILE ? this.kunden[kunde].MOBILE : undefined,
        this.kunden[kunde].EMAIL ? this.kunden[kunde].EMAIL : undefined,
        this.kunden[kunde].WEBSITE ? this.kunden[kunde].WEBSITE : undefined,
        this.kunden[kunde].VAT_ID ? this.kunden[kunde].VAT_ID : undefined,
        this.kunden[kunde].CURRENCY_CODE ? this.kunden[kunde].CURRENCY_CODE : undefined,
        this.kunden[kunde].LASTUPDATE ? this.kunden[kunde].LASTUPDATE : undefined,
        this.kunden[kunde].TAGS ? this.kunden[kunde].TAGS : undefined
        )
      );
    }
  this.kundenService.createFromArray(this.dtos).subscribe();

  }

}
