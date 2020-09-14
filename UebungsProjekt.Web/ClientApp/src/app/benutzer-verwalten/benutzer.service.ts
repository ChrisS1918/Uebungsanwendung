import { Injectable } from '@angular/core';
import { BaseService } from '../api/baseService';
import { CreateBenutzerDto } from '../api/benutzer/create-benutzer-dto';
import { HttpClient } from '@angular/common/http';
import { Benutzer } from './Benutzer';
import { UpdateBenutzerDto } from '../api/benutzer/update-benutzer-dto';

@Injectable({
  providedIn: 'root'
})
export class BenutzerService extends BaseService<Benutzer, CreateBenutzerDto, UpdateBenutzerDto> {
  constructor(http: HttpClient) {
    super('/api/benutzer', http);
  }
}
