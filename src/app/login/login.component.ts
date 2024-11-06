import { AuthserviceService } from './../services/authservice.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Utilisateur } from '../model/Utilisateur.model';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        RouterLink,
        RouterModule,
        ReactiveFormsModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {
    utilisateur = new Utilisateur();
    erreur: number = 0;
    message: string = "Nom d'utilisateur ou mot de passe erroné";
    constructor(private auth: AuthserviceService, private router: Router) {}
    onLoggedin() {
        this.auth.login(this.utilisateur).subscribe({
            next: (data) => {
                let jwtToken = data.headers.get('Authorization')!;
                this.auth.saveToken(jwtToken);
                this.router.navigate(['/']);
            },
            error: (err: any) => {
                this.erreur = 1;
                if (err.error.errorCause == 'désactivé') {
                    this.message = "Votre compte n'est pas activé";
                }
            },
        });
    }

    ngOnInit(): void {}
}
