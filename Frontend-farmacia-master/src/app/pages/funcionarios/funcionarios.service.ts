import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  getFuncionarios() {
    return this.http.get(`http://localhost:4000/funcionario`);
  }

  getFuncionariosById(id) {
    return this.http.get(`http://localhost:4000/funcionario/${id}`);
  }

  postFuncionarios(dados) {
    this.http.post(`http://localhost:4000/funcionario`, dados).subscribe(data => {
        console.log("Inserido!!!");
    });
  }

  updateFuncionarios(dados, id) {
    this.http.patch(`http://localhost:4000/funcionario/${id}`, dados).subscribe(data => {
      console.log("Inserido!!!");
    });
  }

  removeFuncionarios(id) {
    this.http.delete(`http://localhost:4000/funcionario/${id}`).subscribe();
  }
}
