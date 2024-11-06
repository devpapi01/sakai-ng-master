import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { ProduitService } from '../services/produitservice.service';
import { Categorie } from '../model/categorie.model';
import { RouterLink } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: true,
    imports: [AppMenuitemComponent],
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    categories: Categorie[];
    nomCat: string[] = [];
    constructor(
        public layoutService: LayoutService,
        private produitSer: ProduitService,
        private auth: AuthserviceService
    ) {}

    ngOnInit() {
        if (this.auth.getRole() === 'ADMIN') {
            this.model = [
                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Les produits',
                            icon: 'pi pi-shop',
                            routerLink: ['/listprod'],
                        },
                        {
                            label: 'Les catégories et sous categories',
                            icon: 'pi pi-sitemap',
                            routerLink: ['/listcats'],
                        },
                        {
                            label: 'Les utilisateurs',
                            items: [
                                {
                                    label: 'Les fournisseurs',
                                    icon: 'pi pi-inbox',
                                    routerLink: ['/listefournisseurs'],
                                },
                                {
                                    label: 'les marchands',
                                    icon: 'pi pi-users',
                                    routerLink: ['/listemarchand'],
                                },
                                {
                                    label: 'les services de livraisons',
                                    icon: 'pi pi-truck',
                                    routerLink: ['/listsl'],
                                },

                                {
                                    label: 'les livreurs',
                                    icon: 'pi pi-car',
                                    routerLink: ['/listelivreurs'],
                                },
                            ],
                        },

                        {
                            label: 'Profil',
                            icon: 'pi pi-fw pi-user',
                            routerLink: ['/profil'],
                        },
                    ],
                },

                {
                    label: 'Aide BabanKassouwa',
                    items: [
                        {
                            label: 'Qui sommes nous',
                            icon: 'pi pi-fw pi-question',
                            routerLink: ['/infos'],
                        },
                        {
                            label: 'Nos contacts',
                            icon: 'pi pi-phone',
                            routerLink: ['/h'],
                        },
                    ],
                },
            ];
        } else if (this.auth.getRole() === 'FOURNISSEUR') {
            this.model = [
                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Les produits',
                            icon: 'pi pi-shop',
                            routerLink: ['/listprod'],
                        },
                        {
                            label: 'Les catégories et sous categories',
                            icon: 'pi pi-sitemap',
                            routerLink: ['/listcats'],
                        },

                        {
                            label: 'Profil',
                            icon: 'pi pi-fw pi-user',
                            routerLink: ['/profil'],
                        },
                    ],
                },

                {
                    label: 'Aide BabanKassouwa',
                    items: [
                        {
                            label: 'Qui sommes nous',
                            icon: 'pi pi-fw pi-question',
                            routerLink: ['/infos'],
                        },
                        {
                            label: 'Nos contacts',
                            icon: 'pi pi-phone',
                            routerLink: ['/h'],
                        },
                    ],
                },
            ];
        } else if (this.auth.getRole() === 'SERVICE_LIVRAISON') {
            this.model = [
                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Les commandes',
                            icon: 'pi pi-box',

                            routerLink: ['/listecommandes'],
                        },

                        {
                            label: 'les livreurs',
                            icon: 'pi pi-car',
                            routerLink: ['/listelivreurs'],
                        },
                        {
                            label: 'Profil',
                            icon: 'pi pi-fw pi-user',
                            routerLink: ['/profil'],
                        },
                    ],
                },

                {
                    label: 'Aide BabanKassouwa',
                    items: [
                        {
                            label: 'Qui sommes nous',
                            icon: 'pi pi-fw pi-question',
                            routerLink: ['/infos'],
                        },
                        {
                            label: 'Nos contacts',
                            icon: 'pi pi-phone',
                            routerLink: ['/h'],
                        },
                    ],
                },
            ];
        } else if (this.auth.getRole() === 'LIVREUR') {
            this.model = [
                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Les commandes',
                            icon: 'pi pi-box',

                            routerLink: ['/listecommandes'],
                        },

                        {
                            label: 'Profil',
                            icon: 'pi pi-fw pi-user',
                            routerLink: ['/profil'],
                        },
                    ],
                },

                {
                    label: 'Aide BabanKassouwa',
                    items: [
                        {
                            label: 'Qui sommes nous',
                            icon: 'pi pi-fw pi-question',
                            routerLink: ['/infos'],
                        },
                        {
                            label: 'Nos contacts',
                            icon: 'pi pi-phone',
                            routerLink: ['/h'],
                        },
                    ],
                },
            ];
        } else {
            this.model = [
                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Les produits',
                            icon: 'pi pi-shop',
                            routerLink: ['/listprod'],
                        },
                        {
                            label: 'Les catégories et sous categories',
                            icon: 'pi pi-sitemap',
                            routerLink: ['/listcats'],
                        },
                        {
                            label: 'Les fournisseurs',
                            icon: 'pi pi-inbox',
                            routerLink: ['/listefournisseurs'],
                        },

                        {
                            label: 'les services de livraisons',
                            icon: 'pi pi-truck',
                            routerLink: ['/listsl'],
                        },

                        {
                            label: 'Pour vous',
                            icon: 'pi pi-fw pi-user',
                            items: [
                                {
                                    label: 'Votre panier',
                                    icon: 'pi pi-shopping-cart',
                                    routerLink: ['/panier'],
                                },
                                {
                                    label: 'Vos commandes',
                                    icon: 'pi pi-box',

                                    routerLink: ['/listecommandes'],
                                },
                                {
                                    label: 'Profil',
                                    icon: 'pi pi-fw pi-user',
                                    routerLink: ['/profil'],
                                },
                            ],
                        },
                    ],
                },

                {
                    label: 'Aide BabanKassouwa',
                    items: [
                        {
                            label: 'Qui sommes nous',
                            icon: 'pi pi-fw pi-question',
                            routerLink: ['/infos'],
                        },
                        {
                            label: 'Nos contacts',
                            icon: 'pi pi-phone',
                            routerLink: ['/h'],
                        },
                    ],
                },
            ];
        }

        this.chargerCategorie();
    }

    chargerCategorie() {
        // this.produitSer.listerCategories().subscribe(
        // (categories) => {
        // (this.categories = categories._embedded.categories),
        // categories._embedded.categories.forEach((categorie) =>
        //this.nomCat.push(categorie.nomCat)
        //   );
        // });
    }
}
