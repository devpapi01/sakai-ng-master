import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceLivraison } from '../model/ServiceLivraison.model'; // Adjust the path according to your project structure

@Injectable({
    providedIn: 'root',
})
export class ServiceLivraisonService {
    private apiUrl = 'http://localhost:8080/baba/serviceslivraison'; // Replace with your backend URL

    constructor(private http: HttpClient) {}

    getAll(): Observable<ServiceLivraison[]> {
        return this.http.get<ServiceLivraison[]>(`${this.apiUrl}/all`);
    }

    getById(id: number): Observable<ServiceLivraison> {
        return this.http.get<ServiceLivraison>(`${this.apiUrl}/getSl/${id}`);
    }

    create(serviceLivraison: ServiceLivraison): Observable<ServiceLivraison> {
        return this.http.post<ServiceLivraison>(
            `${this.apiUrl}/addSl`,
            serviceLivraison,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        );
    }

    update(serviceLivraison: ServiceLivraison): Observable<ServiceLivraison> {
        return this.http.put<ServiceLivraison>(
            `${this.apiUrl}/updateSl`,
            serviceLivraison,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        );
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteSL/${id}`);
    }
}
