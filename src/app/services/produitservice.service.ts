import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';

import { Image } from '../model/image.model';

import { ProduitFilterRequest } from '../model/produitrequest.model';
import { Commande } from '../model/Commande.model';
import { LigneCommande } from '../model/LigneCommande.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class ProduitService {
    produits!: Produit[];

    localUrl: string = 'http://localhost:8080/baba/produits';

    foururl = 'http://localhost:8080/baba/fournisseurs';

    imageUrl: string = 'http://localhost:8080/baba/images';

    private readonly localStorageKey = 'panier';

    constructor(private http: HttpClient) {}

    updateFournisseur(id: number, produit: Produit): Observable<Produit> {
        const url = `${this.foururl}/${id}`;
        return this.http.put<Produit>(url, produit);
    }

    listeproduits(): Observable<Produit[]> {
        const url = this.localUrl + '/allprods';
        return this.http.get<Produit[]>(url);
    }

    findbycontains(nom: string): Observable<Produit[]> {
        const url = this.localUrl + `getncont/${nom}`;
        return this.http.get<Produit[]>(url);
    }

    consulterProduit(id: number): Observable<Produit> {
        const url = `${apiURL}/getById/${id}`;

        return this.http.get<Produit>(url);
    }

    filtre(produitFilterRequest: ProduitFilterRequest): Observable<Produit[]> {
        return this.http.post<Produit[]>(
            `${this.localUrl}/filtre`,
            produitFilterRequest
        );
    }

    uploadImageProd(
        file: File,
        filename: string,
        idProd: number
    ): Observable<any> {
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.imageUrl + '/uplaodImageProd'}/${idProd}`;
        return this.http.post(url, imageFormData);
    }

    loadImage(id: number): Observable<Image> {
        const url = `${this.imageUrl + '/get/info'}/${id}`;
        return this.http.get<Image>(url);
    }

    supprimerImage(id: number) {
        const url = `${this.imageUrl}/delete/${id}`;
        return this.http.delete(url, httpOptions);
    }

    uploadImageFS(
        file: File,
        filename: string,
        idProd: number
    ): Observable<any> {
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.imageUrl + '/uploadFS'}/${idProd}`;
        return this.http.post(url, imageFormData);
    }

    private getPanier(): Commande {
        const panierString = localStorage.getItem(this.localStorageKey);
        return panierString ? JSON.parse(panierString) : { lignesCommande: [] };
    }

    private savePanier(panier: Commande): void {
        localStorage.setItem(this.localStorageKey, JSON.stringify(panier));
    }

    ajouterProduit(produit: Produit): void {
        const panier = this.getPanier();
        const ligneCommande = panier.lignesCommande.find(
            (lc) => lc.produit.idProd === produit.idProd
        );

        if (ligneCommande) {
            ligneCommande.quantite++;
            ligneCommande.prixligne =
                (ligneCommande.produit.prixProd * ligneCommande.quantite) /
                produit.quantite;
        } else {
            panier.lignesCommande.push({
                id: null,
                produit,
                quantite: produit.quantite,
                prixligne: produit.prixProd,
                adrfour: '', // à mettre à jour avec les bonnes valeurs
            });
        }

        panier.prixtotal = panier.lignesCommande.reduce(
            (total, lc) => total + lc.prixligne,
            0
        );
        this.savePanier(panier);
    }

    supprimerProduit(produit: Produit): void {
        const panier = this.getPanier();
        panier.lignesCommande = panier.lignesCommande.filter(
            (lc) => lc.produit.idProd !== produit.idProd
        );
        panier.prixtotal = panier.lignesCommande.reduce(
            (total, lc) => total + lc.prixligne,
            0
        );
        this.savePanier(panier);
    }

    getLignesCommande(): LigneCommande[] {
        return this.getPanier().lignesCommande;
    }

    viderPanier(): void {
        this.savePanier({ lignesCommande: [] } as Commande);
    }

    incrementerQuantite(produit: Produit): void {
        const panier = this.getPanier();
        const ligneCommande = panier.lignesCommande.find(
            (lc) => lc.produit.idProd === produit.idProd
        );

        if (ligneCommande) {
            ligneCommande.quantite++;
            ligneCommande.prixligne =
                (ligneCommande.quantite * produit.prixProd) / produit.quantite;
            this.updatePrixTotal(panier);
            this.savePanier(panier);
        }
    }

    decrementerQuantite(produit: Produit): void {
        const panier = this.getPanier();
        const ligneCommande = panier.lignesCommande.find(
            (lc) => lc.produit.idProd === produit.idProd
        );

        if (ligneCommande) {
            if (ligneCommande.quantite > produit.quantite) {
                ligneCommande.quantite--;
                ligneCommande.prixligne =
                    (ligneCommande.quantite * produit.prixProd) /
                    produit.quantite;
                this.updatePrixTotal(panier);
                this.savePanier(panier);
            }

            this.savePanier(panier);
        }
    }

    private updatePrixTotal(panier: Commande): void {
        panier.prixtotal = panier.lignesCommande.reduce(
            (total, lc) => total + lc.prixligne,
            0
        );
    }

    getPrixTotal(): number {
        const panier = this.getPanier();
        return panier.prixtotal;
    }
}
