import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(private loginService: LoginService, private router: Router) { }

  onLogoff(): void {
    this.loginService.logoff();
    this.router.navigate(['/login']);
  }

}
