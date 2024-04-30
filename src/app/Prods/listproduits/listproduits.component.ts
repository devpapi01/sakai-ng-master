import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/produitservice.service';
import { SelectItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

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
    ],
    templateUrl: './listproduits.component.html',
    styleUrl: './listproduits.component.scss',
})
export class ListproduitsComponent implements OnInit {
    produits: Produit[];
    sortOptions: SelectItem[] = [];
    constructor(private produitService: ProduitService) {}

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    ngOnInit() {
        this.produitService
            .listeproduits()
            .subscribe((prods) => (this.produits = prods));

        this.sortOptions = [
            { label: 'prix décroissant', value: '!price' },
            { label: 'prix croissant', value: 'price' },
            { label: 'nom A-Z', value: 'nom' },
            { label: 'nom Z-A', value: 'nom' },
        ];
    }
}
