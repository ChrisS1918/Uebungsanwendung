import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseService } from '../api/baseService';
import { CreateKundenDto } from '../api/kunden/create-kunden-dto';
import { UpdateKundenDto } from '../api/kunden/update-kunde-dto';
import { Result } from '../api/Result';
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

  getlocalCustomers() {
    return this.http.get<Result<Customer>>(this.baseUrl);
  }


  
  Import() {
    return this.http.post(this.baseUrl, null);
}


}
