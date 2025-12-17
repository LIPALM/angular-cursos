import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component').then( l => l.LoginPageComponent )
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register-page/register-page.component').then( r => r.RegisterPageComponent )
  },

  {
    path: '**',
    redirectTo: 'login'
  }
]
