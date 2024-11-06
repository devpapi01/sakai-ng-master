import { LigneCommande } from './../model/LigneCommande.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Message } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ProduitService } from '../services/produitservice.service';
import { Produit } from '../model/produit.model';
import { Commande } from '../model/Commande.model';
import { ServiceLivraison } from '../model/ServiceLivraison.model';
import { ServiceLivraisonService } from '../services/livraison-service.service';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { CommandeService } from '../services/commandeservice.service';
import { AuthserviceService } from '../services/authservice.service';
import { Utilisateur } from '../model/Utilisateur.model';

@Component({
    selector: 'app-panier',
    standalone: true,
    imports: [
        RouterModule,
        TableModule,
        CommonModule,
        ButtonModule,
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
        FormsModule,
        ListboxModule,
        MessagesModule,
    ],
    templateUrl: './panier.component.html',
    styleUrl: './panier.component.scss',
})
export class PanierComponent implements OnInit {
    lignesCommande: LigneCommande[] = [];
    prix: number;
    commande: Commande = new Commande();
    listesl: ServiceLivraison[];
    servicel: ServiceLivraison;
    submitted: boolean = false;
    email: string;
    user: Utilisateur = new Utilisateur();
    messages: Message[] | undefined;

    constructor(
        private produitservice: ProduitService,
        private sl: ServiceLivraisonService,
        private commandeservice: CommandeService,
        private router: Router,
        public auth: AuthserviceService
    ) {}
    ngOnInit(): void {
        this.lignesCommande = this.produitservice.getLignesCommande();
        this.prix = this.produitservice.getPrixTotal();
        this.sl.getAll().subscribe((data) => (this.listesl = data));
        this.messages = [
            { severity: 'warn', detail: 'Paiement à la livraison' },
        ];
    }

    supprimerProduit(produit: Produit): void {
        this.produitservice.supprimerProduit(produit);
        this.lignesCommande = this.produitservice.getLignesCommande();
        this.prix = this.produitservice.getPrixTotal();
    }

    viderPanier(): void {
        this.produitservice.viderPanier();
        this.lignesCommande = [];
        this.prix = this.produitservice.getPrixTotal();
    }

    incrementerQuantite(produit: Produit): void {
        this.produitservice.incrementerQuantite(produit);
        this.lignesCommande = this.produitservice.getLignesCommande();
        this.prix = this.produitservice.getPrixTotal();
    }

    decrementerQuantite(produit: Produit): void {
        this.produitservice.decrementerQuantite(produit);
        this.lignesCommande = this.produitservice.getLignesCommande();
        this.prix = this.produitservice.getPrixTotal();
    }

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    commander() {
        this.commande.lignesCommande = this.produitservice.getLignesCommande();
        this.commandeservice
            .createCommande(this.commande)
            .subscribe(() => this.router.navigate(['/listprod']));
        this.viderPanier();
    }

    hideDialog() {
        this.visible = false;
    }
    add() {
        this.commande.serviceLivraison = this.servicel;
        console.log(this.commande.serviceLivraison.nom);
    }

    toggleUseUserInfo(event: any): void {
        if (event.target.checked) {
            this.email = this.auth.getEmail();

            this.auth
                .getByEmail(this.email)
                .subscribe((data) => (this.user = data));
            this.commande.adresseLivraison = this.user.adresse.emplacement;
            this.commande.emailRec = this.user.email;
            this.commande.numRec = this.user.telephone;
        } else {
            this.commande.adresseLivraison = '';
            this.commande.emailRec = '';
            this.commande.numRec = '';
        }
    }
}
