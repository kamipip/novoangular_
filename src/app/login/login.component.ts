import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = '';
  senha = '';
  mensagemErro = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onLogin(): void {
    this.mensagemErro = '';
    if (this.loginService.login(this.usuario, this.senha)) {
      this.router.navigate(['/']);
    }
    else {
      this.mensagemErro = 'Login ou senha inválidos.';
    }
  }

}
