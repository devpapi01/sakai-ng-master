import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './layout/app.layout.component';

export const Layoutroutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/app.layout.component').then(
                (module) => module.AppLayoutComponent
            ),
        children: [
            {
                path: '',

                loadChildren: () => import('./Prods/produits.routes'),
            },
            {
                path: '',
                loadChildren: () => import('./helper/helper.routes'),
            },
            {
                path: '',
                loadChildren: () => import('./acteurs/acteurs.routes'),
            },

            {
                path: 'listcats',
                loadComponent: () =>
                    import(
                        '../app/cat_souscats/Cats/listecategorie/listecategorie.component'
                    ).then((module) => module.ListecategorieComponent),
            },
            {
                path: 'panier',
                loadComponent: () =>
                    import('./panier/panier.component').then(
                        (module) => module.PanierComponent
                    ),
            },
            {
                path: '',
                loadChildren: () => import('./Commandes/commandes.routes'),
            },
            {
                path: 'profil',
                loadComponent: () =>
                    import('./profile/profile.component').then(
                        (module) => module.ProfileComponent
                    ),
            },
        ],
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login.component').then(
                (module) => module.LoginComponent
            ),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./register/register.component').then(
                (module) => module.RegisterComponent
            ),
    },
    {
        path: 'profil',
        loadComponent: () =>
            import('./profile/profile.component').then(
                (module) => module.ProfileComponent
            ),
    },
    {
        path: 'verification',
        loadComponent: () =>
            import('./verifyemail/verifyemail.component').then(
                (module) => module.VerifyemailComponent
            ),
    },
];
