import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginProps } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  submit = (event: any, {name,password}:LoginProps) => {
    event.preventDefault();
    if (name !== '' && password !== '') {
      this.router.navigate(['home']);
    }
  };
}
