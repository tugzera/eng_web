import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  private handdleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(msg: string) {
    console.log(msg);
  }

  constructor(private http: HttpClient) { }

  getLogin(l: Login) {
    return this.http.post<Login>('http://localhost:4000/login', l);
  }
}

