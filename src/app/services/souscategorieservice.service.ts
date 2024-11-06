// sous-categorie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Souscategorie } from '../model/souscategorie.model';

@Injectable({
    providedIn: 'root',
})
export class SousCategorieService {
    private baseUrl = 'http://localhost:8080/baba/souscategories';

    constructor(private http: HttpClient) {}

    getAllSousCategories(): Observable<Souscategorie[]> {
        return this.http.get<Souscategorie[]>(`${this.baseUrl}/allsc`);
    }

    getSousCategorieById(id: number): Observable<Souscategorie> {
        return this.http.get<Souscategorie>(`${this.baseUrl}/getssc/${id}`);
    }

    getSousCategoriesByCategorieId(id: number): Observable<Souscategorie[]> {
        return this.http.get<Souscategorie[]>(
            `${this.baseUrl}/getbycatid/${id}`
        );
    }

    getAllSousCategorieNames(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/allnomss`);
    }

    getSousCategoriesByName(nom: string): Observable<Souscategorie[]> {
        return this.http.get<Souscategorie[]>(`${this.baseUrl}/ssnomc/${nom}`);
    }

    addSousCategorie(
        id: number,
        sousCategorie: Souscategorie
    ): Observable<Souscategorie> {
        return this.http.post<Souscategorie>(
            `${this.baseUrl}/addsscat/${id}`,
            sousCategorie
        );
    }

    updateSousCategorie(
        sousCategorie: Souscategorie
    ): Observable<Souscategorie> {
        return this.http.put<Souscategorie>(
            `${this.baseUrl}/updatecat`,
            sousCategorie
        );
    }

    deleteSousCategorie(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/deletessc/${id}`);
    }
}
