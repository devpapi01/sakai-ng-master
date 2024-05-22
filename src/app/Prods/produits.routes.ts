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
        path: 'updateprod/:id',
        loadComponent: () =>
            import('./updateprod/updateprod.component').then(
                (module) => module.UpdateprodComponent
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
