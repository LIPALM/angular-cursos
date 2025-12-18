import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },

  {
    path: 'auth',
    // canActivate: [PublicGuard],  // Solo si NO está logueado (después)
    loadChildren: () => import('./auth/auth.routes').then( r => r.AuthRoutes )
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],  // Solo si está logueado (después)
    loadChildren: () => import('./pico-dorado/pico-dorado.routes').then( r => r.routes)

  },

  {
    path: '**',
    redirectTo: 'home'
  }
];
