import { Component } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submit: (event: any, user: string, password: string) => void = () => {};

  constructor(private loginService: LoginService) {
    this.submit = this.loginService.submit;
  }
}
