import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dispositivos',
    loadComponent: () => import('./dispositivo/dispositivo.page').then( m => m.DispositivoPage),
  },
  {
    path: 'dispositivos/:id',
    loadComponent: () => import('./dispositivo/dispositivo.page').then( m => m.DispositivoPage),
  },
  {
    path: 'mediciones',
    loadComponent: () => import('./mediciones/mediciones.page').then( m => m.MedicionesPage)
  },
  {
    path: 'mediciones/:id',
    loadComponent: () => import('./mediciones/mediciones.page').then( m => m.MedicionesPage)
  }
];
