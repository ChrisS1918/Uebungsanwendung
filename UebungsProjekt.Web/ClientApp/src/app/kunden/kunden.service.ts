import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class KundenService {


  constructor(private readonly http: HttpClient) { }


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
}
