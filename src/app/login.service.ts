import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(usuario: string, senha: string): boolean {
    if (usuario === 'admin' && senha === '1234') {
      localStorage.setItem('autenticado', 'sim');
      return true;
    }
    else {
      return false;
    }
  }

  logoff(): void {
    localStorage.clear();
  }

  estaAutenticado(): boolean {
    if (localStorage.getItem('autenticado')) {
      return true;
    }
    else {
      return false;
    }
  }
}
