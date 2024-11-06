import { Injectable } from '@angular/core';
import { Fournisseur } from '../model/Fournisseur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../model/produit.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class FournisseurserviceService {
    private fournisseurUrl = 'http://localhost:8080/baba/fournisseurs'; // Replace with your backend URL

    constructor(private http: HttpClient) {}

    getAll(): Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(`${this.fournisseurUrl}/all`);
    }

    getById(id: number): Observable<Fournisseur> {
        return this.http.get<Fournisseur>(`${this.fournisseurUrl}/getid/${id}`);
    }

    getAllnom(): Observable<string[]> {
        return this.http.get<string[]>(this.fournisseurUrl + '/allnomsf');
    }

    getByNomContains(nom: string): Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(
            `${this.fournisseurUrl}/nomContains/${nom}`
        );
    }

    getByPays(pays: string): Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(
            `${this.fournisseurUrl}/pays/${pays}`
        );
    }

    getByNomAcs(): Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(`${this.fournisseurUrl}/nomAcs`);
    }

    getByNomDesc(): Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(`${this.fournisseurUrl}/nomDesc`);
    }

    getByPreAcs(): Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(`${this.fournisseurUrl}/preAcs`);
    }

    getByPreDesc(): Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(`${this.fournisseurUrl}/preDesc`);
    }

    addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
        return this.http.post<Fournisseur>(
            `${this.fournisseurUrl}/addFournisseur`,
            fournisseur,
            httpOptions
        );
    }

    deleteFournisseur(id: number): Observable<void> {
        return this.http.delete<void>(
            `${this.fournisseurUrl}/supprimerFournisseur/${id}`
        );
    }

    addproduitfournisseur(
        id: number,
        produit: Produit
    ): Observable<Fournisseur> {
        return this.http.put<Fournisseur>(
            `${this.fournisseurUrl}/fouraddprod/${id}`,
            produit,
            httpOptions
        );
    }

    updateInfos(fournisseur: Fournisseur): Observable<Fournisseur> {
        return this.http.put<Fournisseur>(
            `${this.fournisseurUrl}/updateinfos`,
            fournisseur,
            httpOptions
        );
    }
}
