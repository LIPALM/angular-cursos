import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard-page/dashboard-page.component').then( d => d.DashboardPageComponent ),

    children: [
      {
        path: 'caja',
        loadComponent: () => import('./pages/dashboard-caja/dashboard-caja.component').then( c => c.DashboardCajaComponent )
      },
      {
        path: 'pedidos',
        loadComponent: () => import('./pages/dashboard-pedidos/dashboard-pedidos.component').then( p => p.DashboardPedidosComponent )
      },
      {
        path: 'tickets-generados',
        loadComponent: () => import('./pages/dashboard-tickets-generados/dashboard-tickets-generados.component') .then( t => t.DashboardTicketsGeneradosComponent )
      },
      {
        path: 'pedidos-anulados',
        loadComponent: () => import('./pages/dashboard-pedidos-anulados/dashboard-pedidos-anulados.component').then( p => p.DashboardPedidosAnuladosComponent )
      },
      {
        path: 'reporte',
        loadComponent: () => import('./pages/dashboard-reporte/dashboard-reporte.component').then( r => r.DashboardReporteComponent )
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/dashboard-perfil/dashboard-perfil.component').then( p => p.DashboardPerfilComponent )
      },
      {
        path: '',
        redirectTo: 'caja',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
