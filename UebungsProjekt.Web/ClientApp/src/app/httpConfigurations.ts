import { HttpHeaders } from "@angular/common/http";

export class fastBillConfiguration {
    username = 'fastTest@tempr.email';
    passwordAsApiKey = 'ac6c60f49f195c1f0d91dae6d1bd02790GFHWcg3MEg0uFiGHdkgohxrlY9FjokL'
    url = 'https://my.fastbill.com/api/1.0/api.php?OFFSET=CUSTOMERS&=';
    postedData = `
    {
      "SERVICE": "customer.get" 
    }`;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + btoa(this.username + ':' + this.passwordAsApiKey)
        })
    };
}

export class reportingcloudConfiguration {
    username = 'fastTest@tempr.email';
    password = "kpN|$Sz4YPs'"
    url = 'https://api.reporting.cloud/v1/document/merge?returnFormat=PDF&templateName=sample_invoice.tx';
    postedData;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
        })
    };
}
