
import { Route } from '@angular/router';

export const routerDashboard: Route[] = [
    {
        path: '',
        children: [
            {
                path: 'survey-form',
                loadComponent: () => import('./survey-form/survey-form.component').then(c => c.SurveyFormComponent)
            },
            {
                path: 'survey-form-walker',
                loadComponent: () => import('./survey-form-walker/survey-form-walker.component').then(c => c.SurveyFormWalkerComponent)
            },
            {
                path: 'map',
                loadComponent: () => import('./map/map.component').then(c => c.MapComponent)
            }
        ]
    }
];