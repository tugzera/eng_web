import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(private http: HttpClient) { }

  getFornecedores() {
    return this.http.get(`http://localhost:4000/fornecedor`);
  }

  getFornecedoresById(id) {
    return this.http.get(`http://localhost:4000/fornecedor/${id}`);
  }

  postFornecedores(dados) {
    this.http.post(`http://localhost:4000/fornecedor`, dados).subscribe(data => {
        console.log("Inserido!!!");
    });
  }

  updateFornecedores(dados, id) {
    this.http.patch(`http://localhost:4000/fornecedor/${id}`, dados).subscribe(data => {
      console.log("Inserido!!!");
    });
  }

  removeFornecedores(id) {
    this.http.delete(`http://localhost:4000/fornecedor/${id}`).subscribe();
  }
}
