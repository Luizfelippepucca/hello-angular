import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  submit = (event: any, user: string, password: string) => {
    event.preventDefault();
    if (user !== '' && password !== '') {
      this.router.navigate(['home']);
    }
  };
}
