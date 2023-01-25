import { Component } from '@angular/core';

import { LoginService } from './login.service';

 export interface LoginProps{
  name:string;
  password:string;
 }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  person:LoginProps = {
    name: '',
    password:''

  }
  submit: (event: any,  {name,password}:LoginProps) => void = () => {};


  constructor(private loginService: LoginService) {
    this.submit = this.loginService.submit;

  }
}
