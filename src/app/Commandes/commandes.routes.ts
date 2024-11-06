import { Routes } from '@angular/router';
import { produitGuard } from '../Guards/produit.guard';

export default [
    {
        path: 'listecommandes',
        loadComponent: () =>
            import('./listescommandes/listescommandes.component').then(
                (module) => module.ListescommandesComponent
            ),
        canActivate: [produitGuard],
    },
] as Routes;
