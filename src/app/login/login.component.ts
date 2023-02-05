import { Component } from '@angular/core';

import { LoginService } from './login.service';

export interface RegisterProps {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  person: RegisterProps = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  step: string = 'name';
  enableBnt: boolean = true;
  submit: (event: any, person: RegisterProps) => void = () => {};
  handleNextStep: (step: string) => void = () => {};
  handlebacktStep: (step: string) => void = () => {};
  handleChange: (step: string) => void = () => {};
  showPassword: () => void = () => {};
  showPass: boolean = false;

  constructor(private loginService: LoginService) {
    this.showPassword = () => {
      this.showPass = !this.showPass;
    };
    this.handlebacktStep = (step) => {
      if (step === 'lastName') {
        this.step = 'name';
        if (this.person.name !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'email') {
        this.step = 'lastName';
        if (this.person.lastName !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'password') {
        this.step = 'email';
        if (this.person.email !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'confirmPassword') {
        this.step = 'password';
        if (this.person.password !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'finish') {
        this.step = 'confirmPassword';
        if (this.person.confirmPassword !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
    };
    this.handleNextStep = (step) => {
      if (step === 'name') {
        this.step = 'lastName';
        if (this.person.lastName !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'lastName') {
        this.step = 'email';

        if (this.person.email !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'email') {
        this.step = 'password';

        if (this.person.password !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'password') {
        this.step = 'confirmPassword';

        if (this.person.confirmPassword !== '') {
          this.enableBnt = false;
          return;
        }
        this.enableBnt = true;
      }
      if (step === 'confirmPassword') {
        this.step = 'finish';
      }
    };

    this.submit = (event, person) => {
      event.preventDefault();

      console.log(person);

      return;
    };

    this.handleChange = (step) => {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (
        step === 'name' &&
        this.person.name !== '' &&
        this.person.name.length >= 4
      ) {
        this.enableBnt = false;
        return;
      }
      this.enableBnt = true;
      if (
        step === 'lastName' &&
        this.person.lastName !== '' &&
        this.person.lastName.length >= 4
      ) {
        this.enableBnt = false;
        return;
      }
      this.enableBnt = true;

      if (
        step === 'email' &&
        emailRegex.exec(this.person.email) &&
        this.person.email.includes('com')
      ) {
        this.enableBnt = false;
        return;
      }
      this.enableBnt = true;
      if (
        step === 'password' &&
        this.person.password !== '' &&
        this.person.password.length >= 6
      ) {
        this.enableBnt = false;
        return;
      }
      this.enableBnt = true;
      if (
        step === 'confirmPassword' &&
        this.person.confirmPassword !== '' &&
        this.person.confirmPassword.length >= 6
      ) {
        this.enableBnt = false;
        return;
      }
      this.enableBnt = true;
    };
  }
}
