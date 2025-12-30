import { Routes } from '@angular/router';
import { FullscreenMapPageComponent } from './pages/fullscreen-map-page/fullscreen-map-page.component';
import { MarkesPageComponent } from './pages/markes-page/markes-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';

export const routes: Routes = [
  {
    path: 'fullscreen-map',
    component: FullscreenMapPageComponent,
    title: 'Fullscreen Map',
  },
  {
    path: 'markes',
    component: MarkesPageComponent,
    title: 'Markes',
  },
  {
    path: 'houses',
    component: HousesPageComponent,
    title: 'Houses',
  },
  {
    path: '**',
    redirectTo: 'fullscreen-map',
  }


];
