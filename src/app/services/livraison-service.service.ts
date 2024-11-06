import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceLivraison } from '../model/ServiceLivraison.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class ServiceLivraisonService {
    private ServiceUrl = 'http://localhost:8080/baba/serviceslivraison';

    constructor(private http: HttpClient) {}

    getAll(): Observable<ServiceLivraison[]> {
        return this.http.get<ServiceLivraison[]>(`${this.ServiceUrl}/all`);
    }

    getById(id: number): Observable<ServiceLivraison> {
        return this.http.get<ServiceLivraison>(
            `${this.ServiceUrl}/getSl/${id}`
        );
    }

    createSl(serviceLivraison: ServiceLivraison): Observable<ServiceLivraison> {
        return this.http.post<ServiceLivraison>(
            `${this.ServiceUrl}/addSl`,
            serviceLivraison,
            httpOptions
        );
    }

    updateSl(serviceLivraison: ServiceLivraison): Observable<ServiceLivraison> {
        return this.http.put<ServiceLivraison>(
            `${this.ServiceUrl}/updateSl`,
            serviceLivraison,
            httpOptions
        );
    }

    deleteSl(id: number): Observable<void> {
        return this.http.delete<void>(`${this.ServiceUrl}/deleteSL/${id}`);
    }
}
