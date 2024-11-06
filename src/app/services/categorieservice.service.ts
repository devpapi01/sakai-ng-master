// categorie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie.model';

@Injectable({
    providedIn: 'root',
})
export class CategorieService {
    private baseUrl = 'http://localhost:8080/baba/categories';

    constructor(private http: HttpClient) {}

    getAllCategories(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(`${this.baseUrl}/allcats`);
    }

    getbyid(id: number): Observable<Categorie> {
        return this.http.get<Categorie>(`${this.baseUrl}/getByid/${id}`);
    }

    getAllCategoryNames(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/allnoms`);
    }

    getCategoriesByName(nom: string): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(`${this.baseUrl}/nomc/${nom}`);
    }

    addCategory(categorie: Categorie): Observable<Categorie> {
        return this.http.post<Categorie>(`${this.baseUrl}/addcat`, categorie);
    }

    updateCategory(categorie: Categorie): Observable<Categorie> {
        return this.http.put<Categorie>(`${this.baseUrl}/updatecat`, categorie);
    }

    deleteCategory(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/deletecat/${id}`);
    }
}
