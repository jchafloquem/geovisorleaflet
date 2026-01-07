import { Routes } from '@angular/router';


export default [
			{
				path: 'map',
        title:'Geo Visor',
				loadComponent: () => import('./pages/map/map').then(m => m.Map),
			},
			{
				path: '',
				redirectTo: 'map',
				pathMatch: 'full',
			},
] as Routes

