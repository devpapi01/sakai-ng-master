import { Routes } from '@angular/router';

export default [
    {
        path: 'listprod',
        loadComponent: () =>
            import('./listproduits/listproduits.component').then(
                (module) => module.ListproduitsComponent
            ),
    },
    {
        path: 'infos',
        loadComponent: () =>
            import('../helper/infos/infos.component').then(
                (module) => module.InfosComponent
            ),
    },
] as Routes;
