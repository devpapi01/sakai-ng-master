import { Routes } from '@angular/router';

export default [
    {
        path: 'listefournisseurs',
        loadComponent: () =>
            import('./listefournisseurs/listefournisseurs.component').then(
                (module) => module.ListefournisseursComponent
            ),
    },
    {
        path: 'fournisseur/:id',
        loadComponent: () =>
            import('./detailfournisseur/detailfournisseur.component').then(
                (module) => module.DetailfournisseurComponent
            ),
    },
    {
        path: 'listsl',
        loadComponent: () =>
            import('./servicelivraison/servicelivraison.component').then(
                (module) => module.ServicelivraisonComponent
            ),
    },
    {
        path: 'listemarchand',
        loadComponent: () =>
            import('./listemarchand/listemarchand.component').then(
                (module) => module.ListemarchandComponent
            ),
    },
    {
        path: 'listelivreurs',
        loadComponent: () =>
            import('./listelivreurs/listelivreurs.component').then(
                (module) => module.ListelivreursComponent
            ),
    },
] as Routes;
