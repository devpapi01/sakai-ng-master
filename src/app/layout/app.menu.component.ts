import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { ProduitService } from '../services/produitservice.service';
import { Categorie } from '../model/categorie.model';
import { RouterLink } from '@angular/router';

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
        private produitSer: ProduitService
    ) {}

    ngOnInit() {
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
                        icon: 'pi pi-users',
                        routerLink: ['/listefournisseurs'],
                    },
                    {
                        label: 'les services de livraisons',
                        icon: 'pi pi-truck',
                        routerLink: ['/listsl'],
                    },
                    {
                        label: 'les marchands',
                        icon: 'pi pi-truck',
                        routerLink: ['/listemarchand'],
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
