import { isEmpty, Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
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
import { RouterModule } from '@angular/router';

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
    produits: Produit[];
    sortOptions: SelectItem[] = [];
    message: string = ' ';
    Listecats: any;
    Listessscats: any;
    constructor(private produitService: ProduitService) {}

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    ngOnInit() {
        this.produitService
            .listeproduits()
            .subscribe((prods) => (this.produits = prods));

        this.produitService
            .listeCats()
            .subscribe((cats) => (this.Listecats = cats));
        this.produitService
            .listessCats()
            .subscribe((ssc) => (this.Listessscats = ssc));

        this.sortOptions = [
            { label: 'prix décroissant', value: 'prixdesc' },
            { label: 'prix croissant', value: 'prixasc' },
            { label: 'nom A-Z', value: 'nomasc' },
            { label: 'nom Z-A', value: 'nomdesc' },
        ];
    }

    orderOption(event: any) {
        const value = event.value;
        console.log(value);
    }
}
