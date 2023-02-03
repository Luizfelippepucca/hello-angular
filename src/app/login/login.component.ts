import { Component } from '@angular/core';

import { LoginService } from './login.service';

export interface RegisterProps {
  name: string;
  lastName: string;
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
  };
  step: string = 'name';
  submit: (event: any, person: RegisterProps) => void = () => {};
  handleNextStep: (step: string) => void = () => {};
  handlebacktStep: (step: string) => void = () => {};

  constructor(private loginService: LoginService) {
    this.handlebacktStep = (step) => {
      if (step === 'lastName') {
        this.step = 'name';
      }
    };
    this.handleNextStep = (step) => {
      if (step === 'name') {
        console.log(step);
        this.step = 'lastName';
      }
    };
    this.submit = (event, person) => {
      event.preventDefault();

      console.log(person.name);

      return;
    };
  }
}
