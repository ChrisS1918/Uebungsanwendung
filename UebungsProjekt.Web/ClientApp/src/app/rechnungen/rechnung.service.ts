import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../api/baseService';
import { CreateRechnungDto } from '../api/rechnungen/create-rechnung-dto';
import { UpdateRechnungDto } from '../api/rechnungen/update-rechnung-dto';
import { Rechnung } from './Rechnung';

@Injectable({
  providedIn: 'root'
})
export class RechnungService extends BaseService<Rechnung, CreateRechnungDto, UpdateRechnungDto>  {
  constructor(http: HttpClient) {
    super('/api/invoice', http);
  }
}
