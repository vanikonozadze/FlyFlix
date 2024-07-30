import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./core/login/login.component').then(mod => mod.LoginComponent)},
    {path: 'login', loadComponent: () => import('./core/login/login.component').then(mod => mod.LoginComponent)},
    {path: 'register', loadComponent: () => import('./core/register/register.component').then(mod => mod.RegisterComponent)}
];
