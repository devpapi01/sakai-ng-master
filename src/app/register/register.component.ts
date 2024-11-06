import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { Router, RouterLink } from '@angular/router';
import {
    FormControl,
    Validators,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { Marchand } from '../model/marchand.model';
import { MarchandserviceService } from '../services/marchandservice.service';
import { AuthserviceService } from '../services/authservice.service';
import { Utilisateur } from '../model/Utilisateur.model';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        DividerModule,
        ButtonModule,
        InputTextModule,
        InputMaskModule,
        PasswordModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    m = new Utilisateur();
    confirmationMotDePasse: string;
    err: any;
    validators: Validators;
    constructor(
        private route: Router,
        private marchand: MarchandserviceService,
        private auth: AuthserviceService
    ) {}
    loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
        }, 2000);
        this.route.navigate(['verification']);
    }

    save() {
        this.marchand.createMarchand(this.m).subscribe({
            next: (res) => {
                this.auth.setRegistreduser(this.m);
                this.route.navigate(['verification']);
            },
            error: (err: any) => {
                if (err.status == 400) {
                    this.err = err.error.message;
                }
            },
        });
    }
}
