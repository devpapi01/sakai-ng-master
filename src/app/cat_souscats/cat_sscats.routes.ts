import { Routes } from '@angular/router';

export default [
    {
        path: 'listcats',
        loadComponent: () =>
            import('./Cats/listecategorie/listecategorie.component').then(
                (module) => module.ListecategorieComponent
            ),
    },
] as Routes;
