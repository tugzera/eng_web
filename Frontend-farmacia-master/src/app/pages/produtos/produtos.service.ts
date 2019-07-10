import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`http://localhost:4000/produto`);
  }

  getById(id) {
    return this.http.get(`http://localhost:4000/produto/${id}`);
  }

  post(dados) {
    this.http.post(`http://localhost:4000/produto`, dados).subscribe(data => {
        console.log("Inserido!!!");
    });
  }

  update(dados, id) {
    this.http.patch(`http://localhost:4000/produto/${id}`, dados).subscribe(data => {
      console.log("Inserido!!!");
    });
  }

  remove(id) {
    this.http.delete(`http://localhost:4000/produto/${id}`).subscribe();
  }
}
