import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RechnungService {

  constructor(private readonly http: HttpClient) { }

  url = "https://api.reporting.cloud/v1/document/merge?returnFormat=PDF&templateName=sample_invoice.tx";

  createInvoice(url, postedData, httpOptions) {
    return this.http.post(url, postedData, httpOptions)
  }
}
