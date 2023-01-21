import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  getCursos() {
    return ['React', 'Angurlar', 'vue', 'Flutter'];
  }
}
