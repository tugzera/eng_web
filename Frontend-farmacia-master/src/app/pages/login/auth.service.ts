import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginAutenticado: boolean = false;

  mostrarMenu = new EventEmitter<boolean>();

  private loginAtutenticadoUser: boolean = false;

  mostrarMenuUser = new EventEmitter<boolean>();

  constructor(
    private router: Router,
  ) { }

  fazerLogin(login: Login) {
    if (login != null) {
      if (login.status === 'admin') {
        this.loginAutenticado = true;
        this.mostrarMenu.emit(true);
        this.router.navigate(['/admin']);
      }
      if (login.status === 'user') {
        this.loginAtutenticadoUser = true;
        this.mostrarMenuUser.emit(true);
        this.router.navigate(['/user']);
      }
    }
    else {
      this.loginAutenticado = false;
      this.mostrarMenu.emit(false);
      this.router.navigate(['/login']);
    }
  }

  loginAuth() {
    return this.loginAutenticado;
  }

  loginAuthUser() {
    return this.loginAtutenticadoUser;
  }
}

