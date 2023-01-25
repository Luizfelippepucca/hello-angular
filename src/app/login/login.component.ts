import { Component } from '@angular/core';

import { LoginService } from './login.service';

 export interface LoginProps{
  user:string;
  password:string;
 }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nome:string="";
  senha:string="";
  submit: (event: any,  {user,password}:LoginProps) => void = () => {};


  constructor(private loginService: LoginService) {
    this.submit = this.loginService.submit;

  }
}
