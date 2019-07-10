import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Endereco } from '../models/endereco.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAddress(cep){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
