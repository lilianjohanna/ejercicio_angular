
import { Routes } from '@angular/router';

export const routersApp: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./views/dashboard/dashboard.component').then(c => c.DashboardComponent),
        loadChildren: () => import('./views/dashboard/dashboard-routing').then(r => r.routerDashboard)
    },
    {
        path: 'auth',
        loadComponent: () => import('./views/auth/auth.component').then(c => c.AuthComponent),
        loadChildren: () => import('./views/auth/auth-routing').then(r => r.routerAuth)
    },
    {
        path:'',
        redirectTo: '/dashboard/survey-form',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: '/error-http/notfound',
        pathMatch: 'full'
    },
]
