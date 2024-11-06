import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/Utilisateur.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class AuthserviceService {
    token!: string;
    public loggedUser!: string;
    public isloggedin: boolean = false;
    public role: string = '';
    private helper = new JwtHelperService();
    public registredUser: Utilisateur = new Utilisateur();
    private securityUrl = 'http://localhost:8080/baba';
    private userUrl = 'http://localhost:8080/baba/users';
    private verif = 'http://localhost:8080/baba/marchands/verifyEmail/';

    constructor(private http: HttpClient, private router: Router) {}
    logout() {
        this.loggedUser = undefined!;
        this.role = undefined!;
        this.token = undefined!;
        this.isloggedin = false;
        localStorage.removeItem('jwt');
        this.router.navigate(['/login']);
    }

    getAll(): Observable<Utilisateur[]> {
        return this.http.get<Utilisateur[]>(`${this.userUrl}/all`);
    }

    getByEmail(email: string): Observable<Utilisateur> {
        return this.http.get<Utilisateur>(`${this.userUrl}/email/${email}`);
    }

    update(u: Utilisateur): Observable<Utilisateur> {
        return this.http.put<Utilisateur>(this.userUrl + 'updateinfosuser', u);
    }

    getNomContains(nom: string): Observable<Utilisateur[]> {
        return this.http.get<Utilisateur[]>(`${this.userUrl}/nomcont/${nom}`);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.userUrl}/deleteUser/${id}`);
    }

    changePassword(id: number, change: string): Observable<Utilisateur> {
        return this.http.put<Utilisateur>(
            `${this.userUrl}/changepassword/${id}`,
            change,
            httpOptions
        );
    }

    login(user: Utilisateur) {
        return this.http.post<Utilisateur>(this.securityUrl + '/login', user, {
            observe: 'response',
        });
    }

    saveToken(jwt: string) {
        localStorage.setItem('jwt', jwt);
        this.token = jwt;
        this.isloggedin = true;
        this.decodeJWT();
    }

    loadToken() {
        this.token = localStorage.getItem('jwt')!;
        this.decodeJWT();
    }

    getToken(): string {
        return this.token;
    }

    decodeJWT() {
        if (this.token == undefined) return;
        const decodedToken = this.helper.decodeToken(this.token);
        this.role = decodedToken.role;
        this.loggedUser = decodedToken.sub;
    }

    isTokenExpired(): Boolean {
        return this.helper.isTokenExpired(this.token);
    }

    setRegistreduser(utilisateur: Utilisateur) {
        this.registredUser = utilisateur;
    }

    getRegistredUser() {
        return this.registredUser;
    }

    getRole() {
        return this.role;
    }

    getLogged() {
        return this.isloggedin;
    }

    getEmail() {
        return this.loggedUser;
    }

    validateEmail(code: string) {
        return this.http.get<Utilisateur>(this.verif + code);
    }
}
