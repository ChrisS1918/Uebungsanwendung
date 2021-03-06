import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SystemInfo } from './SystemInfo';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Customer } from '../kunden/Kunde';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private readonly http: HttpClient) { }

  getInfo() {
    console.log(this.http.post)
    return this.http.get<SystemInfo>('/api/systeminfo');
  }

  getCustomers(url, postedData, httpOptions) {
    return this.http.post(url, postedData, httpOptions)
    .pipe(
      map(
        result => { 
          const response = new DOMParser().parseFromString(result as unknown as string, "text/xml").querySelector('RESPONSE').firstElementChild; //Zieht aus XML den RESPONSE-Tag und davon das first element child
          const children = Array.from(response.children);
          if(response.tagName === 'ERRORS') {
            throw Error(children.map((e: Element) => e.innerHTML).join('\n'));
          }

          const customers = [];
          children.forEach((e: Element) => {
            const obj = {};
            Array.from(e.children).forEach((e: Element) => obj[e.tagName] = e.innerHTML);
            customers.push(plainToClass(Customer, obj));
          });

          return customers;
        }));
  }

}
