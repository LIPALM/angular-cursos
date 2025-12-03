import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  sublabel: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink],
  templateUrl: './menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionsComponent {
  menuOptions: MenuOption [] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'trending',
      route: '/dashboard/trending',
      sublabel: 'Gifs Populares'
    },

    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      route: '/dashboard/search',
      sublabel: 'Buscar Grifs'
    }
  ]
}
