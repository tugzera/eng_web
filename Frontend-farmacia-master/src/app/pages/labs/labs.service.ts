import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LabsService {

  constructor(private http: HttpClient) { }

  getLabs() {
    return this.http.get(`http://localhost:4000/laboratorio`);
  }

  getLabsById(id) {
    return this.http.get(`http://localhost:4000/laboratorio/${id}`);
  }

  postLabs(dados) {
    this.http.post(`http://localhost:4000/laboratorio`, dados).subscribe(data => {
        console.log("Inserido!!!");
    });
  }

  updateLabs(dados, id) {
    this.http.patch(`http://localhost:4000/laboratorio/${id}`, dados).subscribe(data => {
      console.log("Inserido!!!");
    });
  }

  removeLabs(id) {
    this.http.delete(`http://localhost:4000/laboratorio/${id}`).subscribe();
  }

}
