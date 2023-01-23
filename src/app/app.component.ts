import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'abrir menu';
  menuExpand: boolean = false;
  mostrarMenu = false;
  showOnlyIcons = false;
  itensMenu = [
    new Menu({ name: 'home', nameComplete: 'Ir para home', link: '/home' }),
    new Menu({ name: 'sair', nameComplete: 'Sair da aplicação', link: '#' }),
  ];

  showMenu = () => {
    this.menuExpand = !this.menuExpand;
    this.showOnlyIcons = !this.showOnlyIcons;
    this.title = this.menuExpand ? 'Fechar menu' : 'Abrir menu';
  };
}
