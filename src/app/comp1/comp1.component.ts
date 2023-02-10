import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  http: any;
  dados: any;

  constructor(private loginService: LoginService, private router: Router) { }
  private apiUrl = 'https://api.exemplo.com/';
  onLogoff(): void {
    this.loginService.logoff();
    this.router.navigate(['/login']);
  }

   
  }


