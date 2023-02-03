import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterProps } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  submit = () => {
    console.log('clicou');
  };
}
