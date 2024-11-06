import { isEmpty, Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { DataView } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produitservice.service';
import { SelectItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { Router, RouterModule } from '@angular/router';

import { CategorieService } from 'src/app/services/categorieservice.service';
import { SousCategorieService } from 'src/app/services/souscategorieservice.service';
import { LigneCommande } from 'src/app/model/LigneCommande.model';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { FournisseurserviceService } from 'src/app/services/fournisseurservice.service';
import { ProduitFilterRequest } from 'src/app/model/produitrequest.model';

@Component({
    selector: 'app-listproduits',
    standalone: true,
    imports: [
        FormsModule,
        DataViewModule,
        PickListModule,
        OrderListModule,
        InputTextModule,
        DropdownModule,
        ButtonModule,
        DialogModule,
        TooltipModule,
        InputNumberModule,
        FloatLabelModule,
        CheckboxModule,
        FieldsetModule,
        RouterModule,
    ],
    templateUrl: './listproduits.component.html',
    styleUrl: './listproduits.component.scss',
})
export class ListproduitsComponent implements OnInit {
    orderOption($event: DropdownChangeEvent) {
        throw new Error('Method not implemented.');
    }
    produits: Produit[];

    message: string = ' ';
    Listecats: string[];
    Listessscats: string[];
    selectedCategories: string[] = [];
    selectedsousCategories: string[] = [];

    lignesCommande: LigneCommande[] = [];
    filtreproduit = new ProduitFilterRequest();
    ListeFournisseurs: string[];

    constructor(
        private produitService: ProduitService,
        private cat: CategorieService,
        private fournisseur: FournisseurserviceService,
        private sous: SousCategorieService,
        public auth: AuthserviceService,
        private router: Router
    ) {}

    sortOptions: SelectItem[] = [];
    sortOrder: number = 0;

    sortField: string = '';

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    ngOnInit() {
        this.produitService
            .listeproduits()
            .subscribe((data) => (this.produits = data));
        this.cat
            .getAllCategoryNames()
            .subscribe((data) => (this.Listecats = data));
        this.sous
            .getAllSousCategorieNames()
            .subscribe((data) => (this.Listessscats = data));

        this.fournisseur
            .getAllnom()
            .subscribe((data) => (this.ListeFournisseurs = data));

        this.sortOptions = [
            { label: 'prix décroissant', value: 'prixdesc' },
            { label: 'prix croissant', value: 'prixasc' },
            { label: 'nom A-Z', value: 'nomasc' },
            { label: 'nom Z-A', value: 'nomdesc' },
        ];
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
        console.log((event.target as HTMLInputElement).value);
    }

    ajouterProduit(produit: Produit): void {
        this.produitService.ajouterProduit(produit);
        this.lignesCommande = this.produitService.getLignesCommande();
    }
    ajout() {
        this.router.navigate(['/addprod']);
    }

    addcat(cat: string) {
        this.filtreproduit.categories.push(cat);
        console.log(this.filtreproduit.categories.length);
    }

    addsouscat(ss: string) {
        this.filtreproduit.souscategories.push(ss);
    }

    addfour(four: string) {
        this.filtreproduit.fournisseurs.push(four);
    }
}
