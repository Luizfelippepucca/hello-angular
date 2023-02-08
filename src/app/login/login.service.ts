import { Injectable } from '@angular/core';

import { RegisterProps } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  submit = (event: any, person: RegisterProps) => {
    event.preventDefault();

    console.log(person);

    return;
  };
}
