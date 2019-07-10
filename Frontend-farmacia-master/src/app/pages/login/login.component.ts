import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: Login = new Login();

  private loginAutenticado: boolean = false;


  constructor(
    private service: LoginService,
    private AuthService: AuthService
  ) { }

  ngOnInit() {
  }

  fazerLogin() {
    let user: Login = new Login();
    this.service.getLogin(this.login).subscribe(u => {
      user = u;
      this.AuthService.fazerLogin(user);
    })

    this.AuthService.fazerLogin(null);
  }

  loginAuth() {
    return this.loginAutenticado.valueOf;
  }
}
