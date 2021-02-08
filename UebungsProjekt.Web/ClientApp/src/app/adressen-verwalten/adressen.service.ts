import { Injectable } from '@angular/core';
import { BaseService } from '../api/baseService';
import { Adresse } from './Adresse';
import { CreateAdresseDto } from '../api/adresse/create-adresse-dto';
import { UpdateAdresseDto } from '../api/adresse/update-adresse-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdressenService extends BaseService<Adresse, CreateAdresseDto, UpdateAdresseDto> {
  constructor(http: HttpClient) {
    super('/api/address', http);
  }
}
