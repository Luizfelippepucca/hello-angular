import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submit = function (event: any, user: string, password: string) {
    event.preventDefault();

    if (user !== '' && password !== '') {
      console.log('logou', { name: user, password: password });
      return;
    }
  };
  constructor() {}
}
