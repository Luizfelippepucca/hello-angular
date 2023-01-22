import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'abrir';
  aumentaMenu: boolean = false;
  showMenu = () => {
    this.aumentaMenu = !this.aumentaMenu;
  };
}
