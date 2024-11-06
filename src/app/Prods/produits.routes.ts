import { Routes } from '@angular/router';

export default [
    {
        path: '',
        redirectTo: 'listprod',
        pathMatch: 'full',
    },
    {
        path: 'listprod',
        pathMatch: 'full',
        loadComponent: () =>
            import('./listproduits/listproduits.component').then(
                (module) => module.ListproduitsComponent
            ),
    },

    {
        path: 'addprod',
        loadComponent: () =>
            import('./addproduit/addproduit.component').then(
                (module) => module.AddproduitComponent
            ),
    },

    {
        path: 'detailprod/:id',
        loadComponent: () =>
            import('./detailprod/detailprod.component').then(
                (module) => module.DetailprodComponent
            ),
    },
] as Routes;
