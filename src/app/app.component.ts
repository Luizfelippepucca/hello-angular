import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    new Menu({ name: 'home', nameComplete: 'Home', link: '/home' }),
    new Menu({ name: 'sair', nameComplete: 'Logout', link: '#' }),
  ];

  showMenu = () => {
    this.menuExpand = !this.menuExpand;
    this.showOnlyIcons = !this.showOnlyIcons;
    this.title = this.menuExpand ? 'Fechar menu' : 'Abrir menu';
  };

  constructor(private route: Router) {}
}
