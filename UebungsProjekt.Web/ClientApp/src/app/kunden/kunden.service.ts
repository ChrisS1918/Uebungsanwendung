import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseService } from '../api/baseService';
import { CreateKundenDto } from '../api/kunden/create-kunden-dto';
import { UpdateKundenDto } from '../api/kunden/update-kunde-dto';
import { Customer } from './Kunde';

@Injectable({
  providedIn: 'root'
})
export class KundenService extends BaseService<Customer, CreateKundenDto, UpdateKundenDto> {

  baseUrl = '/api/kunden';

  constructor(http: HttpClient) {
    super('/api/kunden', http);
  }


  getCustomers(url, postedData, httpOptions) {
    return this.http.post(url, postedData, httpOptions).pipe(
      map((r: any) => {
        const response = r.RESPONSE;

        if (response.ERRORS) {
          throw new Error(response.ERRORS);
        }
        return response.CUSTOMERS as Customer[];
      })
    );
  }


  
  createFromArray(dtos) {
    console.log("Baseurl: " + this.baseUrl);
    return this.http.post<Customer[]>(this.baseUrl, dtos);
}


}
