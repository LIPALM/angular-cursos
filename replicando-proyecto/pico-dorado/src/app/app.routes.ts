import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then( r => r.AuthRoutes )
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];
