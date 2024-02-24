
import { Route } from '@angular/router';

export const routerAuth: Route[] = [
    {
        path: '',
        children: [
            {
                path: 'login',
                loadComponent: () => import('./login/login.component').then(r => r.LoginComponent)
            }
        ]
    }
];