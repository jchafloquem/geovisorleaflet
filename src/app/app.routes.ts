import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'geovisor',
    loadComponent: () => import('../app/geovisor/geovisor'),
    loadChildren: () => import('../app/geovisor/geovisor.routes'),
  },
  {
		path: '',
		redirectTo: '/geovisor',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/geovisor',
		pathMatch: 'full',
	},
];
