import { Injectable } from '@angular/core';
import { Marchand } from '../model/marchand.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MarchandserviceService {
    constructor(private http: HttpClient) {}

    private marchandUrl = 'http://localhost:8080/baba/marchands';

    //Marchand

    getAll(): Observable<Marchand[]> {
        return this.http.get<Marchand[]>(`${this.marchandUrl}/all`);
    }

    createMarchand(marchand: Marchand): Observable<Marchand> {
        return this.http.post<Marchand>(
            `${this.marchandUrl}/register`,
            marchand,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        );
    }

    getByNomContains(nom: string): Observable<Marchand[]> {
        return this.http.get<Marchand[]>(
            `${this.marchandUrl}/search?nom=${nom}`
        );
    }

    getByNomAsc(): Observable<Marchand[]> {
        return this.http.get<Marchand[]>(`${this.marchandUrl}/sort/asc`);
    }

    getByNomDesc(): Observable<Marchand[]> {
        return this.http.get<Marchand[]>(`${this.marchandUrl}/sort/desc`);
    }

    findByEmail(email: string): Observable<Marchand> {
        return this.http.get<Marchand>(
            `${this.marchandUrl}/email?email=${email}`
        );
    }

    deleteMarchandById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.marchandUrl}/delete/${id}`);
    }
}
