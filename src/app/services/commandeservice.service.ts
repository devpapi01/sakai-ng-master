import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../model/Commande.model';

@Injectable({
    providedIn: 'root',
})
export class CommandeService {
    private apiUrl = 'http://localhost:8080/baba/commandes';
    constructor(private http: HttpClient) {}

    getAllCommandes(): Observable<Commande[]> {
        return this.http.get<Commande[]>(`${this.apiUrl}/all`);
    }

    getCommandesByMarchandId(id: number): Observable<Commande[]> {
        return this.http.get<Commande[]>(`${this.apiUrl}/getbyM/${id}`);
    }

    getCommandesByServiceLivraisonId(id: number): Observable<Commande[]> {
        return this.http.get<Commande[]>(`${this.apiUrl}/getbySL/${id}`);
    }

    getCommandeByReference(ref: string): Observable<Commande> {
        return this.http.get<Commande>(`${this.apiUrl}/getbyref/${ref}`);
    }

    getCommandesByLivreurId(id: number): Observable<Commande[]> {
        return this.http.get<Commande[]>(`${this.apiUrl}/getbylivreur/${id}`);
    }

    createCommande(commande: Commande): Observable<Commande> {
        return this.http.post<Commande>(
            `${this.apiUrl}/newcommande`,
            commande,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        );
    }

    setLivreurForCommande(idC: number, idL: number): Observable<Commande> {
        return this.http.put<Commande>(
            `${this.apiUrl}/setlivreur/${idC}/${idL}`,
            {}
        );
    }

    updateEtatCommande(idC: number, etat: string): Observable<Commande> {
        return this.http.put<Commande>(`${this.apiUrl}/etatcom/${idC}`, {
            etat,
        });
    }

    deleteCommande(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deletecom/${id}`);
    }
}
