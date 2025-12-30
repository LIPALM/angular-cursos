import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";


interface SideMenuItem {
  title: string;
  route: string;
}

const reactiveItem = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  reactiveMenu: SideMenuItem[] = reactiveItem
    .filter(item => item.path !== '**')
    .map(item => ({
      route: `reactive/${item.path}`,
      title: `${item.title}`,
  }));

  authMenu = [
    {
    title: 'registro',
    route: './auth'
    }
  ];

  countryMenu = [
    {
      title: 'paises',
      route: './country'
    }
  ]

}
