import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/page/dashboard-page/dashboard-page.component'),

    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/page/trending-page/trending-page.component'),
      },

      {
        path: 'search',
        loadComponent: () => import('./gifs/page/search-page/search-page.component'),
      },

      {
        path: '**',
        redirectTo: 'trending'
      }
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
