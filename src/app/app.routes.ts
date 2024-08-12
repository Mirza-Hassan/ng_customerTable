import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'customer', loadComponent: () => import('./start/start.component').then(mod => mod.StartComponent) },
    { path: '',   redirectTo: '/', pathMatch: 'full' },
];
