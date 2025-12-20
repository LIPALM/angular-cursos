import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOption } from '../../interface/menu-option.interface';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'sidebar-menu',
  imports: [NgForOf, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent {
  private router = inject(Router);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-cash-register',
      label: 'Caja',
      sublabel: 'Platos',
      route: '/dashboard/caja'
    },
    {
      icon: 'fa-solid fa-clipboard-list',
      label: 'Pedidos',
      sublabel: 'Pendientes',
      route: '/dashboard/pedidos'
    },
    {
      icon: 'fa-solid fa-ticket-alt',
      label: 'tickets',
      sublabel: 'Generados',
      route: '/dashboard/tickets-generados'
    },
    {
      icon: 'fa-solid fa-ban',
      label: 'Anulados',
      sublabel: 'Pedidos',
      route: '/dashboard/pedidos-anulados'
    },
    {
      icon: 'fa-solid fa-file-invoice-dollar',
      label: 'Reporte',
      sublabel: 'Ventas',
      route: '/dashboard/reporte'
    },
    {
      icon: 'fa-solid fa-user',
      label: 'Perfil',
      route: '/dashboard/profile'
    },
    // { icon: 'fa-solid fa-gear',
    //   label: 'Ajustes',
    //   route: '/dashboard/settings'
    // },
    // { icon: 'fa-solid fa-chart-line',
    //   label: 'Reportes',
    //   route: '/dashboard/reports'
    // },
  ];

  // navigateTo(opt: MenuOption) {
  //   // ejemplo si quieres navegar programáticamente
  //   this.router.navigate([opt.route]);
  // }

  trackByRoute(index: number, item: MenuOption) { return item.route ?? index; }
}
