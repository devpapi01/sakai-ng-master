import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './layout/app.layout.component';

export const Layoutroutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/app.layout.component').then(
                (module) => module.AppLayoutComponent
            ),
    },
];
