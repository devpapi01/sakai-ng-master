import { Routes } from '@angular/router';

export default [
    {
        path: 'infos',
        loadComponent: () =>
            import('./infos/infos.component').then(
                (module) => module.InfosComponent
            ),
    },
] as Routes;
