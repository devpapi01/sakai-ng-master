import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ServiceLivraison } from 'src/app/model/ServiceLivraison.model';
import { ServiceLivraisonService } from 'src/app/services/servicelivraison.service';
import { CommonModule } from '@angular/common';
import { ProduitService } from 'src/app/services/produitservice.service';
import { Produit } from 'src/app/model/produit.model';
import { RouterLink, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { FournisseurserviceService } from 'src/app/services/fournisseurservice.service';
import { Fournisseur } from 'src/app/model/Fournisseur.model';

@Component({
    selector: 'app-listefournisseurs',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        RouterModule,
        InputTextModule,
        InputNumberModule,
        TagModule,
        IconFieldModule,
        InputIconModule,
        HttpClientModule,
        DialogModule,
        InputMaskModule,
        PasswordModule,
        RouterLink,
        InputTextareaModule,
    ],
    templateUrl: './listefournisseurs.component.html',
    styleUrl: './listefournisseurs.component.scss',
})
export class ListefournisseursComponent implements OnInit {
    visible: boolean = false;
    listefour: Fournisseur[];

    showDialog() {
        this.visible = true;
    }
    constructor(
        public auth: AuthserviceService,
        private four: FournisseurserviceService
    ) {}

    ngOnInit() {
        this.four.getAll().subscribe((data) => (this.listefour = data));
    }
}
