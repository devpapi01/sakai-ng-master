import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livreur } from '../model/Livreur.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class LivreurService {
    private livreurdUrl = 'http://localhost:8080/baba/livreurs';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Livreur[]> {
        return this.http.get<Livreur[]>(`${this.livreurdUrl}/all`);
    }

    getById(id: number): Observable<Livreur> {
        return this.http.get<Livreur>(`${this.livreurdUrl}/getbyid/${id}`);
    }

    getForServiceLivraison(id: number): Observable<Livreur[]> {
        return this.http.get<Livreur[]>(`${this.livreurdUrl}/getforsl/${id}`);
    }

    addLivreur(idSL: number, livreur: Livreur): Observable<Livreur> {
        return this.http.post<Livreur>(
            `${this.livreurdUrl}/addlivreur/${idSL}`,
            livreur,
            httpOptions
        );
    }

    updateLivreur(livreur: Livreur): Observable<Livreur> {
        return this.http.put<Livreur>(
            `${this.livreurdUrl}/updateL`,
            livreur,
            httpOptions
        );
    }

    deleteLivreur(id: number): Observable<void> {
        return this.http.delete<void>(
            `${this.livreurdUrl}/deletelivreur/${id}`
        );
    }
}
