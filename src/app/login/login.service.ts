import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginProps } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  submit = (event: any, {user,password}:LoginProps) => {
    event.preventDefault();
    console.log({user:user,senha:password})
    if (user !== '' && password !== '') {
      this.router.navigate(['home']);
    }
  };
}
